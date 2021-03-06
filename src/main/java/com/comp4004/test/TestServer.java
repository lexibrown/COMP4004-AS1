package main.java.com.comp4004.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import main.java.com.comp4004.model.Book;
import main.java.com.comp4004.server.Server;
import main.java.com.comp4004.server.ServerController;
import main.java.com.comp4004.server.tools.ActionResult;
import main.java.com.comp4004.utils.Config;

public class TestServer {

	private static ServerController c;

	@BeforeClass
	public static void setUp() throws Exception {
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		try {
			c.start();
			c.clearData();
		} catch (IOException ioe) {
			fail("Failed to start server");
		}
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		c.clearData();
		c = null;
	}

	// tests verifying admin credentials
	@Test
	public void testAdmin() {
		assertFalse(c.isAdmin("123", "456"));
		assertTrue(c.isAdmin(Config.CLERK_USERNAME, Config.CLERK_PASSWORD));
	}

	// tests adding users
	@Test
	public void testCreateUser() {
		String username = "test1";
		String password = "pass1";
		assertTrue(c.createUser(username, password));
		assertFalse(c.createUser(username, password));
	}

	// tests user verification
	@Test
	public void testConfirmUser() {
		String username = "test123";
		String password = "pass123";
		assertTrue(c.createUser(username, password));

		assertTrue(c.confirmUser(username, password));
		assertFalse(c.confirmUser(username, password + "4"));
	}

	// tests user removal
	@Test
	public void testRemoveUser() {
		String username = "test2";
		String password = "pass2";
		assertTrue(c.createUser(username, password));

		assertEquals(ActionResult.REMOVED_USER, c.removeUser(username));
		assertNull(c.searchUser(username));
	}

	// tests searching for users
	@Test
	public void testSearchUser() {
		String username = "test3";
		String password = "pass3";
		assertTrue(c.createUser(username, password));

		assertNotNull(c.searchUser(username));
		assertNull(c.searchUser(username + "3"));
	}

	// tests adding books
	@Test
	public void testAddBook() {
		int ISBN = 12345;
		String title = "title1";
		assertTrue(c.addBook(ISBN, title));
		assertFalse(c.addBook(ISBN, title));
	}

	// tests removing books
	@Test
	public void testRemoveBook() {
		int ISBN = 123456;
		String title = "title2";
		assertTrue(c.addBook(ISBN, title));

		assertEquals(ActionResult.REMOVED_BOOK, c.removeBook(ISBN));
		assertNull(c.searchBook(ISBN));

		assertTrue(c.addBook(ISBN, title));
		assertEquals(ActionResult.REMOVED_BOOK, c.removeBook(title));
		assertNull(c.searchBook(ISBN));
	}

	// tests searching for books
	@Test
	public void testSearchBook() {
		int ISBN = 1234567;
		String title = "title3";
		assertTrue(c.addBook(ISBN, title));

		Book b1 = c.searchBook(ISBN);
		assertNotNull(b1);
		assertEquals(ISBN, b1.getISBN());
		assertEquals(title, b1.getTitle());

		Book b2 = c.searchBook(title);
		assertNotNull(b2);
		assertEquals(ISBN, b2.getISBN());
		assertEquals(title, b2.getTitle());
		assertTrue(b2.equals(b1));
	}

	// tests adding copies of books
	@Test
	public void testAddCopy() {
		int ISBN = 123;
		String title = "title123";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));
		assertTrue(c.addCopy(ISBN));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);

		assertEquals(3, b.numCopies());
		assertNotNull(b.getCopy(2));
		assertEquals(1, b.getCopy(1).getCopyNumber());
		assertNull(b.getCopy(4));
	}

	// tests removing copies of books
	@Test
	public void testRemoveCopy() {
		int ISBN = 321;
		String title = "title321";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));
		assertTrue(c.addCopy(ISBN));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertEquals(3, b.numCopies());
		assertNotNull(b.getCopy(2));

		assertEquals(ActionResult.REMOVED_COPY, c.removeCopy(ISBN, 2));

		b = c.searchBook(ISBN);
		assertNotNull(b);
		assertEquals(2, b.numCopies());
		assertNotNull(b.getCopy(1));
		assertNull(b.getCopy(2));
		assertNotNull(b.getCopy(3));
	}

	// tests making reservations
	@Test
	public void testMakeReservation() {
		String username1 = "res1";
		String password1 = "res1";
		assertTrue(c.createUser(username1, password1));

		String username2 = "res2";
		String password2 = "res2";
		assertTrue(c.createUser(username2, password2));

		int ISBN = 999;
		String title = "reserve";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		assertEquals(ActionResult.NO_SUCH_USER, c.reserve(ISBN, 1, "helloworld"));
		assertEquals(ActionResult.NO_SUCH_BOOK, c.reserve(ISBN + 9000, 1, username1));
		assertEquals(ActionResult.NO_SUCH_COPY, c.reserve(ISBN, 4, username1));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username1));
		assertEquals(ActionResult.RESERVATION_EXISTS, c.reserve(ISBN, 1, username2));
	}

	// tests removing reservations
	@Test
	public void testRemoveReservation() {
		String username1 = "res3";
		String password1 = "res3";
		assertTrue(c.createUser(username1, password1));

		String username2 = "res4";
		String password2 = "res4";
		assertTrue(c.createUser(username2, password2));

		int ISBN = 888;
		String title = "reserve";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username1));
		assertEquals(ActionResult.RESERVATION_EXISTS, c.reserve(ISBN, 1, username2));

		assertTrue(c.removeReservation(ISBN, 1, username1));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username2));
		assertEquals(ActionResult.RESERVATION_EXISTS, c.reserve(ISBN, 1, username1));
	}

}
