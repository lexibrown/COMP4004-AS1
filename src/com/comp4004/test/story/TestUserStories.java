package com.comp4004.test.story;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.comp4004.model.User;
import com.comp4004.server.Server;
import com.comp4004.server.ServerController;
import com.comp4004.server.tools.ActionResult;
import com.comp4004.utils.Config;

public class TestUserStories {

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
	public void testUserCreationPositive() {
		String username = "testCreation";
		String password = "testCreationPassword";

		assertTrue(c.createUser(username, password));
		User u = c.searchUser(username);
		assertNotNull(c);
		assertEquals(username, u.getUsername());
		assertEquals(password, u.getPassword());
		assertNotEquals(0, u.getUserId());
	}

	@Test
	public void testUserCreationNegative() {
		String username1 = "testCreationN1";
		String password1 = "testCreationPasswordN1";
		String username2 = "testCreationN1";
		String password2 = "testCreationPasswordN2";

		assertTrue(c.createUser(username1, password1));
		assertFalse(c.createUser(username2, password2));

		User u = c.searchUser(username1);
		assertNotNull(c);
		assertEquals(username1, u.getUsername());
		assertEquals(password1, u.getPassword());
		assertNotEquals(0, u.getUserId());
	}

	@Test
	public void testUserDeletePositive() {
		String username = "testUserDeletePositive";
		String password = "testUserDeletePositivenPassword";

		assertTrue(c.createUser(username, password));
		assertNotNull(c.searchUser(username));

		assertEquals(ActionResult.REMOVED_USER, c.removeUser(username));
		assertNull(c.searchUser(username));
	}

	// user does not exist
	@Test
	public void testUserDeleteNegative1() {
		String username = "testUserDeleteNegative1";
		assertNull(c.searchUser(username));
		assertEquals(ActionResult.NO_SUCH_USER, c.removeUser(username));
		assertNull(c.searchUser(username));
	}

	// users privilege revoked
	@Test
	public void testUserDeleteNegative2() {
		String username = "testUserDeleteNegative2";
		String password = "testUserDeleteNegative2Password";

		assertTrue(c.createUser(username, password));
		assertNotNull(c.searchUser(username));
		c.revokePrivilege(username);

		assertEquals(ActionResult.NO_PRIVILEGE, c.removeUser(username));
		assertNotNull(c.searchUser(username));
	}

	// user has active loans
	@Test
	public void testUserDeleteNegative3() {
		String username = "testUserDeleteNegative3";
		String password = "testUserDeleteNegative3Password";

		assertTrue(c.createUser(username, password));
		assertNotNull(c.searchUser(username));

		int iSBN = 98765;
		String title = "testUserDeleteNegative3";
		assertTrue(c.addBook(iSBN, title));
		assertTrue(c.addCopy(iSBN));

		assertEquals(ActionResult.BORROWED, c.borrow(username, iSBN, 1));

		assertEquals(ActionResult.HAS_LOANS, c.removeUser(username));
		assertNotNull(c.searchUser(username));
	}

}
