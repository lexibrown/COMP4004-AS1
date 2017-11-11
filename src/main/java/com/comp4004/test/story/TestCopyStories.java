package main.java.com.comp4004.test.story;

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

public class TestCopyStories {

	private static ServerController c;
	
	@BeforeClass
	public static void setUp() throws Exception {
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		c.setTag(TestCopyStories.class.getName());
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

	// tests successfully adding copy
	@Test
	public void testAddCopyPositive() {
		int ISBN = 77777;
		String title = "testAddBookPositive";

		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertEquals(ISBN, b.getISBN());
		assertEquals(title, b.getTitle());
		assertEquals(2, b.numCopies());

		assertNotNull(b.getCopy(1));
		assertEquals(1, b.getCopy(1).getCopyNumber());
		assertNotNull(b.getCopy(2));
		assertEquals(2, b.getCopy(2).getCopyNumber());
		assertNull(b.getCopy(3));
	}

	// book does not exist
	@Test
	public void testAddCopyNegative() {
		int ISBN = -12345;
		Book b = c.searchBook(ISBN);
		assertNull(b);
		assertFalse(c.addCopy(ISBN));
		assertFalse(c.addCopy(ISBN));
	}
	
	// tests successfully removing copy
	@Test
	public void testRemoveCopyPositive() {
		int ISBN = 11111;
		String title = "testRemoveCopyPositive";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.REMOVED_COPY, c.removeCopy(ISBN, 1));
		b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNull(b.getCopy(1));
	}

	// book does not exist
	@Test
	public void testRemoveCopyNegative1() {
		int ISBN = 4444;

		assertNull(c.searchBook(ISBN));
		assertEquals(ActionResult.NO_SUCH_BOOK, c.removeCopy(ISBN, 1));
		assertNull(c.searchBook(ISBN));
	}

	// copy does not exist
	@Test
	public void testRemoveCopyNegative2() {
		int ISBN = 3333;
		String title = "testRemoveCopyNegative2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
		assertNull(b.getCopy(2));

		assertEquals(ActionResult.NO_SUCH_COPY, c.removeCopy(ISBN, 2));
		b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
		assertNull(b.getCopy(2));
	}

	// copy is borrowed
	@Test
	public void testRemoveCopyNegative3() {
		String username = "testRemoveCopyNegative3";
		String password = "testRemoveCopyNegative3Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 2222;
		String title = "testRemoveCopyNegative3";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));

		assertEquals(ActionResult.LOAN_EXISTS, c.removeCopy(ISBN, 1));
		b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
	}

	// copy is reserved
	@Test
	public void testRemoveCopyNegative4() {
		String username = "testRemoveCopyNegative4";
		String password = "testRemoveCopyNegative4Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 1111;
		String title = "testRemoveCopyNegative4";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username));

		assertEquals(ActionResult.RESERVATION_EXISTS, c.removeCopy(ISBN, 1));
		b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
	}

}
