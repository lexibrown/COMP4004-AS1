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
		c.setTag(TestUserStories.class.getName());
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

	// tests successful user creation
	@Test
	public void testUserCreationPositive1() {
		String username = "testUserCreationPositive1";
		String password = "testUserCreationPositive1Password";

		assertTrue(c.createUser(username, password));
		User u = c.searchUser(username);
		assertNotNull(c);
		assertEquals(username, u.getUsername());
		assertEquals(password, u.getPassword());
	}

	// tests successful user creation with unique id
	@Test
	public void testUserCreationPositive2() {
		String username1 = "testUserCreationPositive21";
		String password1 = "testUserCreationPositive21Password21";
		assertTrue(c.createUser(username1, password1));

		String username2 = "testUserCreationPositive22";
		String password2 = "testUserCreationPositive22Password22";
		assertTrue(c.createUser(username2, password2));

		User u1 = c.searchUser(username1);
		assertNotNull(u1);
		assertEquals(username1, u1.getUsername());
		assertEquals(password1, u1.getPassword());
		
		User u2 = c.searchUser(username2);
		assertNotNull(u2);
		assertEquals(username2, u2.getUsername());
		assertEquals(password2, u2.getPassword());
		
		assertNotEquals(u1.getUserId(), u2.getUserId());
	}
	
	// username already exists
	@Test
	public void testUserCreationNegative() {
		String username1 = "testUserCreationNegative1";
		String password1 = "testUserCreationNegativePassword1";
		String username2 = "testUserCreationNegative1";
		String password2 = "testUserCreationNegativePassword2";

		assertTrue(c.createUser(username1, password1));
		assertFalse(c.createUser(username2, password2));

		User u = c.searchUser(username1);
		assertNotNull(u);
		assertEquals(username1, u.getUsername());
		assertEquals(password1, u.getPassword());
	}

	// tests successful user deletion
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
