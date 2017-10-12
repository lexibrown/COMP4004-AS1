package com.comp4004.test.story;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.comp4004.server.Server;
import com.comp4004.server.ServerController;
import com.comp4004.utils.Config;

public class TestMonitorStories {

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

	private String readFile(String file) {
		return null;
	}

	// books and users exist
	@Test
	public void testMonitor1() {
		c.createUser("testMonitor1Username1", "password1");
		c.createUser("testMonitor1Username2", "password2");
		c.createUser("testMonitor1Username3", "password3");

		c.addBook(12345, "testMonitor1Title1");
		c.addCopy(12345); // borrowed
		c.addCopy(12345);

		c.addBook(23456, "testMonitor1Title2");
		c.addCopy(23456);
		c.addCopy(23456); // borrowed

		c.addBook(34567, "testMonitor1Title3");
		c.addCopy(34567); // reserved

		c.addBook(45678, "testMonitor1Title4");
		c.addCopy(45678);
		c.addCopy(45678); // borrowed
		c.addCopy(45678); // borrowed, reserved

		c.addBook(56789, "testMonitor1Title5");
		c.addCopy(56789); // borrowed, reserved

		c.borrow("testMonitor1Username1", 12345, 1);
		c.borrow("testMonitor1Username1", 45678, 3);
		c.borrow("testMonitor1Username2", 23456, 2);
		c.borrow("testMonitor1Username3", 56789, 1);
		c.borrow("UtestMonitor1sername3", 45678, 2);

		c.reserve(56789, 1, "testMonitor1Username1");
		c.reserve(34567, 1, "testMonitor1Username2");
		c.reserve(45678, 3, "testMonitor1Username3");

		String expected = readFile("testMonitor1BooksAndUsers.txt");
		assertEquals(expected, c.monitorSystem());
	}

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

		String expected = readFile("testMonitor2Books.txt");
		assertEquals(expected, c.monitorSystem());
	}

	// only users
	@Test
	public void testMonitor3() {
		c.createUser("testMonitor3User1", "password1");
		c.createUser("testMonitor3User2", "password2");
		c.createUser("testMonitor3User3", "password3");

		String expected = readFile("testMonitor3Users.txt");
		assertEquals(expected, c.monitorSystem());
	}

}
