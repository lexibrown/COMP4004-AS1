package com.comp4004.test.story;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.comp4004.model.Book;
import com.comp4004.server.Server;
import com.comp4004.server.ServerController;
import com.comp4004.server.tools.ActionResult;
import com.comp4004.utils.Config;

public class TestRenewStories {

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

	@Test
	public void testRenewPositive() {
		String username = "testRenewPositive";
		String password = "testRenewPositiveePassword";

		assertTrue(c.createUser(username, password));

		int ISBN = 1000;
		String title = "testRenewPositive";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.RENEWED, c.renew(username, ISBN, 1));
	}

	// no such user
	@Test
	public void testRenewNegative1() {
		String username1 = "testRenewNegative1";
		String username2 = "testRenewNegative1Wrong";
		String password = "testRenewNegative1Password";

		assertTrue(c.createUser(username1, password));

		int ISBN = 1001;
		String title = "testRenewNegative1";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN, 1));
		assertEquals(ActionResult.NO_SUCH_USER, c.renew(username2, ISBN, 1));
	}

	// no such book
	@Test
	public void testRenewNegative2() {
		String username = "testRenewNegative2";
		String password = "testRenewNegative2Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 1002;
		String title = "testRenewNegative2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.NO_SUCH_BOOK, c.renew(username, ISBN + 200, 1));
	}

	// no such copy
	@Test
	public void testRenewNegative3() {
		String username = "testRenewNegative3";
		String password = "testRenewNegative3Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 1003;
		String title = "testRenewNegative3";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.NO_SUCH_COPY, c.renew(username, ISBN, 2));
	}

	// no such loan
	@Test
	public void testRenewNegative4() {
		String username1 = "testRenewNegative4";
		String password1 = "testRenewNegative4Password";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testRenewNegative4Other";
		String password2 = "testRenewNegative4PasswordOther";
		assertTrue(c.createUser(username2, password2));

		int ISBN1 = 1004;
		String title1 = "testRenewNegative4";
		assertTrue(c.addBook(ISBN1, title1));
		assertTrue(c.addCopy(ISBN1));
		assertTrue(c.addCopy(ISBN1));

		Book b1 = c.searchBook(ISBN1);
		assertNotNull(b1);
		assertNotNull(b1.getCopy(1));
		assertNotNull(b1.getCopy(2));

		int ISBN2 = 10042;
		String title2 = "testRenewNegative4Other";
		assertTrue(c.addBook(ISBN2, title2));
		assertTrue(c.addCopy(ISBN2));

		Book b2 = c.searchBook(ISBN2);
		assertNotNull(b2);
		assertNotNull(b2.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN1, 1));

		assertEquals(ActionResult.NO_SUCH_LOAN, c.renew(username2, ISBN1, 1)); // wrong
																				// username
		assertEquals(ActionResult.NO_SUCH_LOAN, c.renew(username1, ISBN2, 1)); // wrong
																				// ISBN
		assertEquals(ActionResult.NO_SUCH_LOAN, c.renew(username1, ISBN1, 2)); // wrong
																				// copy
	}

	// no privilege
	@Test
	public void testRenewNegative5() {
		String username = "testRenewNegative5";
		String password = "testRenewNegative5Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 1005;
		String title = "testRenewNegative5";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		c.revokePrivilege(username); // assuming user borrowed another book,
										// returned it late and lost privileges

		assertEquals(ActionResult.NO_PRIVILEGE, c.renew(username, ISBN, 1));
	}

	// max renews
	@Test
	public void testRenewNegative6() {
		String username = "testRenewNegative6";
		String password = "testRenewNegative6Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 1006;
		String title = "testRenewNegative6";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.RENEWED, c.renew(username, ISBN, 1));
		assertEquals(ActionResult.RENEWED, c.renew(username, ISBN, 1));
		assertEquals(ActionResult.MAX_RENEW, c.renew(username, ISBN, 1));
	}

	// reservation exists
	@Test
	public void testRenewNegative7() {
		String username1 = "testRenewNegative7";
		String password1 = "testRenewNegative7Password";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testRenewNegative7Other";
		String password2 = "testRenewNegative7PasswordOther";
		assertTrue(c.createUser(username2, password2));

		int ISBN = 1007;
		String title = "testRenewNegative7";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN, 1));
		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username2));
		assertEquals(ActionResult.RESERVATION_EXISTS, c.renew(username1, ISBN, 1));
	}

}
