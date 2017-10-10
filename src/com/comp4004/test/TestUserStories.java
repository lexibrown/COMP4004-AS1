package com.comp4004.test;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.comp4004.model.Book;
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

	@Test
	public void testAddCopyNegative() {
		int ISBN = -12345;
		Book b = c.searchBook(ISBN);
		assertNull(b);
		assertFalse(c.addCopy(ISBN));
		assertFalse(c.addCopy(ISBN));
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
	
	@Test
	public void testRemoveCopyPositive() {
		int ISBN = 11111;
		String title = "testRemoveCopyPositive";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));
		
		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));

		assertEquals(ActionResult.REMOVED_COPY, c.removeCopy(ISBN, 2));
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
		String username = "testBorrowPositive2";
		String password = "testBorrowPositive2Password";
		
		assertTrue(c.createUser(username, password));
		
		int ISBN = 222;
		String title = "testBorrowPositive2";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
		
		assertEquals(ActionResult.RESERVATION_MADE, c.reserve(ISBN, 1, username));
		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
	}

	// user does not exist
	@Test
	public void testBorrowNegative1() {
		fail("Not yet implemented");
	}
	
	// book does not exist
	@Test
	public void testBorrowNegative2() {
		fail("Not yet implemented");
	}
	
	// copy does not exist
	@Test
	public void testBorrowNegative3() {
		fail("Not yet implemented");
	}
	
	// book is loaned
	@Test
	public void testBorrowNegative4() {
		fail("Not yet implemented");
	}
	
	// book is reserved
	@Test
	public void testBorrowNegative5() {
		fail("Not yet implemented");
	}
	
	// user privilege is revoked
	@Test
	public void testBorrowNegative6() {
		fail("Not yet implemented");
	}
	
	// user has reached max loans
	@Test
	public void testBorrowNegative7() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testReturnPositive() {
		String username = "testReturnPositive";
		String password = "testReturnPositivePassword";
		
		assertTrue(c.createUser(username, password));
		
		int ISBN = 11;
		String title = "testReturnPositive";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
		
		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.RETURNED, c.returnLoan(username, ISBN, 1));
	}

	@Test
	public void testReturnNegative() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testRenewPositive() {
		String username = "testRenewPositive";
		String password = "testRenewPositiveePassword";
		
		assertTrue(c.createUser(username, password));
		
		int ISBN = 1;
		String title = "testRenewPositive";
		assertTrue(c.addBook(ISBN, title));
		assertTrue(c.addCopy(ISBN));

		Book b = c.searchBook(ISBN);
		assertNotNull(b);
		assertNotNull(b.getCopy(1));
		
		assertEquals(ActionResult.BORROWED, c.borrow(username, ISBN, 1));
		assertEquals(ActionResult.RETURNED, c.renew(username, ISBN, 1));
	}

	@Test
	public void testRenewNegative() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testPeyFeePositive() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testPeyFeeNegative() {
		fail("Not yet implemented");
	}
	
}
