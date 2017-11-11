package main.java.com.comp4004.test.story;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import main.java.com.comp4004.model.Book;
import main.java.com.comp4004.server.Server;
import main.java.com.comp4004.server.ServerController;
import main.java.com.comp4004.server.tools.ActionResult;
import main.java.com.comp4004.utils.Config;

public class TestReturnStories {

	private static ServerController c;

	@BeforeClass
	public static void setUp() throws Exception {
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		c.setTag(TestReturnStories.class.getName());
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

	private Date generateFakeDate(int days) {
		Calendar c = Calendar.getInstance();
		c.setTime(new Date());
		c.add(Calendar.DATE, days);
		return c.getTime();
	}

	// tests successful book return
	@Test
	public void testReturnPositive1() {
		String username = "testReturnPositive1";
		String password = "testReturnPositive1Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 11;
		String title = "testReturnPositive1";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.RETURNED, c.returnLoan(username, ISBN, 1));
	}

	// book returned but fee added, privilege not revoked
	@Test
	public void testReturnPositive2() {
		String username = "testReturnPositive2";
		String password = "testReturnPositive2Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 22;
		String title = "testReturnPositive2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));

		Date fakeToday = generateFakeDate(Config.RETURN_DAY_LIMIT + 1);
		assertEquals(ActionResult.FEE_ADDED, c.returnLoan(username, ISBN, 1, fakeToday));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
	}

	// book returned but fee added, privilege revoked
	@Test
	public void testReturnPositive3() {
		String username = "testReturnPositive3";
		String password = "testReturnPositive3Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 221;
		String title = "testReturnPositive3";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));

		Date fakeToday = generateFakeDate(Config.RETURN_DAY_LIMIT + Config.OVERDUE + 1);
		assertEquals(ActionResult.PRIVILEGE_REVOKED, c.returnLoan(username, ISBN, 1, fakeToday));

		assertEquals(ActionResult.NO_PRIVILEGE, c.borrow(username, ISBN, 1));
	}

	// no such user
	@Test
	public void testReturnNegative1() {
		String username1 = "testReturnNegative1";
		String username2 = "testReturnNegative1Wrong";
		String password = "testReturnNegative1Password";

		assertTrue(c.createUser(username1, password));

		int ISBN = 33;
		String title = "testReturnNegative1";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN, 1));
		assertEquals(ActionResult.NO_SUCH_USER, c.returnLoan(username2, ISBN, 1));
	}

	// no such book
	@Test
	public void testReturnNegative2() {
		String username = "testReturnNegative2";
		String password = "testReturnNegative2Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 44;
		String title = "testReturnNegative2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.NO_SUCH_BOOK, c.returnLoan(username, ISBN + 1, 1));
	}

	// no such copy
	@Test
	public void testReturnNegative3() {
		String username = "testReturnNegative3";
		String password = "testReturnNegative3Password";

		assertTrue(c.createUser(username, password));

		int ISBN = 55;
		String title = "testReturnNegative3";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.NO_SUCH_COPY, c.returnLoan(username, ISBN, 2));
	}

	// no such loan
	@Test
	public void testReturnNegative4() {
		String username1 = "testReturnNegative4";
		String password1 = "testReturnNegative4Password";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testReturnNegative4Other";
		String password2 = "testReturnNegative4PasswordOther";
		assertTrue(c.createUser(username2, password2));

		int ISBN1 = 66;
		String title1 = "testReturnNegative4";
		assertTrue(c.addBook(ISBN1, title1));
		assertTrue(c.addCopy(ISBN1));
		assertTrue(c.addCopy(ISBN1));

		Book b1 = c.searchBook(ISBN1);
		assertNotNull(b1);
		assertNotNull(b1.getCopy(1));
		assertNotNull(b1.getCopy(2));

		int ISBN2 = 77;
		String title2 = "testReturnNegative4Other";
		assertTrue(c.addBook(ISBN2, title2));
		assertTrue(c.addCopy(ISBN2));

		Book b2 = c.searchBook(ISBN2);
		assertNotNull(b2);
		assertNotNull(b2.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username1, ISBN1, 1));

		// wrong username
		assertEquals(ActionResult.NO_SUCH_LOAN, c.returnLoan(username2, ISBN1, 1));
		// wrong ISBN
		assertEquals(ActionResult.NO_SUCH_LOAN, c.returnLoan(username1, ISBN2, 1));
		// wrong copy
		assertEquals(ActionResult.NO_SUCH_LOAN, c.returnLoan(username1, ISBN1, 2));
	}

}
