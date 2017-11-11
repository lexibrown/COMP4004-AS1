package main.java.com.comp4004.test.story;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
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

public class TestBorrowStories {

	private static ServerController c;

	@BeforeClass
	public static void setUp() throws Exception {
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		c.setTag(TestBorrowStories.class.getName());
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

	// book is free to borrow
	@Test
	public void testBorrowPositive1() {
		String username = "testBorrowPositive1";
		String password = "testBorrowPositive1Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 111;
		String title = "testBorrowPositive1";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
	}

	// user reserved book before hand
	@Test
	public void testBorrowPositive2() {
		String username1 = "testBorrowPositive2";
		String password1 = "testBorrowPositive2Password";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testBorrowPositive2Other";
		String password2 = "testBorrowPositive2PasswordOther";
		assertTrue(c.createUser(username2, password2));

		int ISBN = 222;
		String title = "testBorrowPositive2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username1));
		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN, 1));
		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username2));
	}

	// user does not exist
	@Test
	public void testBorrowNegative1() {
		String username = "testBorrowNegative1";

		int ISBN = 333;
		String title = "testBorrowNegative1";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.NO_SUCH_USER, c.borrow(username, ISBN, 1));
	}

	// book does not exist
	@Test
	public void testBorrowNegative2() {
		String username = "testBorrowNegative2";
		String password = "testBorrowNegative2Password";
		assertTrue(c.createUser(username, password));

		int ISBN = 444;
		assertEquals(ActionResult.NO_SUCH_BOOK, c.borrow(username, ISBN, 1));
	}

	// copy does not exist
	@Test
	public void testBorrowNegative3() {
		String username = "testBorrowNegative3";
		String password = "testBorrowNegative3Password";
		assertTrue(c.createUser(username, password));

		int ISBN = 555;
		String title = "testBorrowNegative3";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.NO_SUCH_COPY, c.borrow(username, ISBN, 2));
	}

	// book is loaned
	@Test
	public void testBorrowNegative4() {
		String username1 = "testBorrowNegative4";
		String password1 = "testBorrowNegative4Password";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testBorrowNegative4Other";
		String password2 = "testBorrowNegative4PasswordOther";
		assertTrue(c.createUser(username2, password2));

		int ISBN = 666;
		String title = "testBorrowNegative4";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN, 1));
		assertEquals(ActionResult.LOAN_EXISTS, c.borrow(username2, ISBN, 1));
	}

	// book is reserved
	@Test
	public void testBorrowNegative5() {
		String username1 = "testBorrowNegative5";
		String password1 = "testBorrowNegative5Password";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testBorrowNegative5Other";
		String password2 = "testBorrowNegative5PasswordOther";
		assertTrue(c.createUser(username2, password2));

		int ISBN = 777;
		String title = "testBorrowNegative5";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username1));
		assertEquals(ActionResult.RESERVATION_EXISTS, c.borrow(username2, ISBN, 1));
	}

	// user privilege is revoked
	@Test
	public void testBorrowNegative6() {
		String username = "testBorrowNegative6";
		String password = "testBorrowNegative6Password";
		assertTrue(c.createUser(username, password));
		c.revokePrivilege(username);

		int ISBN = 888;
		String title = "testBorrowNegative6";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.NO_PRIVILEGE, c.borrow(username, ISBN, 1));
	}

	// user has reached max loans
	@Test
	public void testBorrowNegative7() {
		String username = "testBorrowNegative7";
		String password = "testBorrowNegative7Password";
		assertTrue(c.createUser(username, password));

		int ISBN = 999;
		String title = "testBorrowNegative7";
		assertTrue(c.addBook(ISBN, title));
		for (int i = 0; i <= Config.MAX_BORROWED_ITEMS; i++) {
			assertTrue(c.addCopy(ISBN));
		}

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		for (int i = 0; i <= Config.MAX_BORROWED_ITEMS; i++) {
			assertNotNull(b.getCopy(i + 1));
		}

		for (int i = 0; i < Config.MAX_BORROWED_ITEMS; i++) {
			assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, i + 1));
		}
		assertEquals(ActionResult.MAX_LOAN, c.borrow(username, ISBN, Config.MAX_BORROWED_ITEMS + 1));
	}

}
