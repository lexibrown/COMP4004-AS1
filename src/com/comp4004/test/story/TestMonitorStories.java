package com.comp4004.test.story;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.comp4004.server.Server;
import com.comp4004.server.ServerController;
import com.comp4004.utils.Config;

public class TestMonitorStories {

	private ServerController c;

	@Before
	public void setUp() throws Exception {
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		try {
			c.start();
			c.clearData();
		} catch (IOException ioe) {
			fail("Failed to start server");
		}
	}

	@After
	public void tearDown() throws Exception {
		c.clearData();
		c = null;
	}

	private final String testMonitor1String = "Books:\n12345, testMonitor1Title1 [Copies: 2]\n\t12345 [1]\n\t12345 [2]\n23456, testMonitor1Title2 [Copies: 2]\n\t23456 [1]\n\t23456 [2]\n34567, testMonitor1Title3 [Copies: 1]\n\t34567 [1]\n45678, testMonitor1Title4 [Copies: 3]\n\t45678 [1]\n\t45678 [2]\n\t45678 [3]\n56789, testMonitor1Title5 [Copies: 1]\n\t56789 [1]\n\nUsers:\n[1]: testMonitor1Username1, password1\n\tFees: 0\n\tReservations:\n\t\tUser has no reservations\n\tLoans:\n\t\tUser has no loans\n[2]: testMonitor1Username2, password2\n\tFees: 0\n\tReservations:\n\t\tUser has no reservations\n\tLoans:\n\t\tUser has no loans\n[3]: testMonitor1Username3, password3\n\tFees: 0\n\tReservations:\n\t\tUser has no reservations\n\tLoans:\n\t\tUser has no loans\n\n";

	// books and users exist
	@Test
	public void testMonitor1() {
		c.createUser("testMonitor1Username1", "password1");
		c.createUser("testMonitor1Username2", "password2");
		c.createUser("testMonitor1Username3", "password3");

		c.addBook(12345, "testMonitor1Title1");
		c.addCopy(12345);
		c.addCopy(12345);

		c.addBook(23456, "testMonitor1Title2");
		c.addCopy(23456);
		c.addCopy(23456);

		c.addBook(34567, "testMonitor1Title3");
		c.addCopy(34567);

		c.addBook(45678, "testMonitor1Title4");
		c.addCopy(45678);
		c.addCopy(45678);
		c.addCopy(45678);

		c.addBook(56789, "testMonitor1Title5");
		c.addCopy(56789);

		assertEquals(testMonitor1String, c.monitorSystem());
	}

	private final String testMonitor2String = "Books:\n1234, testMonitor2Title1 [Copies: 1]\n\t1234 [1]\n2345, testMonitor2Title2 [Copies: 2]\n\t2345 [1]\n\t2345 [2]\n3456, testMonitor2Title3 [Copies: 3]\n\t3456 [1]\n\t3456 [2]\n\t3456 [3]\n\nUsers:\n\tNo users\n\n";

	// only books
	@Test
	public void testMonitor2() {
		c.addBook(1234, "testMonitor2Title1");
		c.addCopy(1234);

		c.addBook(2345, "testMonitor2Title2");
		c.addCopy(2345);
		c.addCopy(2345);

		c.addBook(3456, "testMonitor2Title3");
		c.addCopy(3456);
		c.addCopy(3456);
		c.addCopy(3456);

		assertEquals(testMonitor2String, c.monitorSystem());
	}

	private final String testMonitor3String = "Books:\n\tNo books\n\nUsers:\n[1]: testMonitor3User1, password1\n\tFees: 0\n\tReservations:\n\t\tUser has no reservations\n\tLoans:\n\t\tUser has no loans\n[2]: testMonitor3User2, password2\n\tFees: 0\n\tReservations:\n\t\tUser has no reservations\n\tLoans:\n\t\tUser has no loans\n[3]: testMonitor3User3, password3\n\tFees: 0\n\tReservations:\n\t\tUser has no reservations\n\tLoans:\n\t\tUser has no loans\n\n";

	// only users
	@Test
	public void testMonitor3() {
		c.createUser("testMonitor3User1", "password1");
		c.createUser("testMonitor3User2", "password2");
		c.createUser("testMonitor3User3", "password3");
		assertEquals(testMonitor3String, c.monitorSystem());
	}

}
