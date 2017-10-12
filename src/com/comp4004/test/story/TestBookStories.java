package com.comp4004.test.story;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.comp4004.model.Book;
import com.comp4004.server.Server;
import com.comp4004.server.ServerController;
import com.comp4004.server.tools.ActionResult;
import com.comp4004.utils.Config;

public class TestBookStories {

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

	// tests successfully book addition
	@Test
	public void testAddBookPositive() {
		int ISBN = 99999;
		String title = "testAddBookPositive";

		assertTrue(c.addBook(ISBN, title));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertEquals(ISBN, b.getISBN());
		assertEquals(title, b.getTitle());
		assertEquals(0, b.numCopies());
	}

	// tests failure of book addition because ISBN already exists
	@Test
	public void testAddBookNegative() {
		int ISBN = 88888;
		String title1 = "testAddBookNegative1";
		String title2 = "testAddBookNegative2";

		assertTrue(c.addBook(ISBN, title1));
		assertFalse(c.addBook(ISBN, title2));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertEquals(ISBN, b.getISBN());
		assertEquals(title1, b.getTitle());
		assertEquals(0, b.numCopies());
	}

	// tests successfully removing book
	@Test
	public void testRemoveBookPositive() {
		int ISBN = 55555;
		String title = "testRemoveBookPositive";

		assertTrue(c.addBook(ISBN, title));
		assertNotNull(c.searchBook(ISBN));

		assertEquals(ActionResult.REMOVED_BOOK, c.removeBook(ISBN));
		assertNull(c.searchBook(ISBN));
	}

	// book does not exist
	@Test
	public void testRemoveBookNegative1() {
		int ISBN = 44444;

		assertNull(c.searchBook(ISBN));
		assertEquals(ActionResult.NO_SUCH_BOOK, c.removeBook(ISBN));
		assertNull(c.searchBook(ISBN));
	}

	// book is loaned
	@Test
	public void testRemoveBookNegative2() {
		String username = "testRemoveBookNegative2";
		String password = "testRemoveBookNegative2Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 33333;
		String title = "testRemoveBookNegative2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));
		assertNotNull(c.searchBook(ISBN));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));

		assertEquals(ActionResult.LOAN_EXISTS, c.removeBook(ISBN));
		assertNotNull(c.searchBook(ISBN));
	}

	// book is reserved
	@Test
	public void testRemoveBookNegative3() {
		String username = "testRemoveBookNegative3";
		String password = "testRemoveBookNegative3Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 22222;
		String title = "testRemoveBookNegative3";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));
		assertNotNull(c.searchBook(ISBN));

		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username));

		assertEquals(ActionResult.RESERVATION_EXISTS, c.removeBook(ISBN));
		assertNotNull(c.searchBook(ISBN));
	}

}
