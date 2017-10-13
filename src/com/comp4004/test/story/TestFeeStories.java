package com.comp4004.test.story;

import static org.junit.Assert.*;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.comp4004.model.Book;
import com.comp4004.server.Server;
import com.comp4004.server.ServerController;
import com.comp4004.server.tools.ActionResult;
import com.comp4004.utils.Config;

public class TestFeeStories {

	private static ServerController c;

	@BeforeClass
	public static void setUp() throws Exception {
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		c.setTag(TestFeeStories.class.getName());
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

	// apply fee but still revoked
	@Test
	public void testPayFeePositive1() {
		String username = "testPayFeePositive1";
		String password = "testPeyFeePositive1Password";
		assertTrue(c.createUser(username, password));

		int ISBN = 2000;
		String title = "testPayFeePositive1";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		Date fakeToday = generateFakeDate(Config.RETURN_DAY_LIMIT + Config.OVERDUE + 2);
		assertEquals(ActionResult.PRIVILEGE_REVOKED, c.returnLoan(username, ISBN, 1, fakeToday));

		assertTrue(c.collectFee(username, Config.OVERDUE_FEE));
		assertEquals(ActionResult.NO_PRIVILEGE, c.borrow(username, ISBN, 1));
	}

	// apply fee, clear revoked
	@Test
	public void testPayFeePositive2() {
		String username = "testPayFeePositive2";
		String password = "testPayFeePositive2Password";
		assertTrue(c.createUser(username, password));

		int ISBN = 2001;
		String title = "testPayFeePositive2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		Date fakeToday = generateFakeDate(Config.RETURN_DAY_LIMIT + Config.OVERDUE + 2);
		assertEquals(ActionResult.PRIVILEGE_REVOKED, c.returnLoan(username, ISBN, 1, fakeToday));

		assertTrue(c.collectFee(username, Config.OVERDUE_FEE * (Config.OVERDUE + 2)));
		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
	}

	// no such user
	@Test
	public void testPayFeeNegative() {
		String username = "testPayFeeNegative";
		assertFalse(c.collectFee(username, 10));
	}

}
