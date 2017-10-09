package com.comp4004.test.database;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import com.comp4004.database.LoanDatabase;
import com.comp4004.model.Loan;

public class TestLoanDatabase {

	LoanDatabase db;

	@Before
	public void testLoad() {
		db = new LoanDatabase();
		try {
			db.loadLoans();
		} catch (IOException e) {
			e.printStackTrace();
			fail("Failed to load loans");
		}
		assertNotNull(db.getLoans());
	}

	@AfterClass
	public static void clear() {
		LoanDatabase db = new LoanDatabase();
		db.flush();
	}

	@Test
	public void testAdd() {
		Loan l1 = new Loan(1001, 2000, 1, new Date());
		db.addLoan(l1);
		Loan l2 = db.findLoan(l1.getISBN(), l1.getCopyNumber());
		assertNotNull(l2);
		assertTrue(l1.equals(l2));
	}

	@Test
	public void testDelete() {
		Loan l1 = new Loan(1001, 2001, 1, new Date());
		db.addLoan(l1);
		db.deleteLoan(l1.getISBN(), l1.getCopyNumber());
		assertNull(db.findLoan(l1.getISBN(), l1.getCopyNumber()));
	}

	@Test
	public void testUpdate() {
		Loan l1 = new Loan(1001, 2001, 3, new Date());
		db.addLoan(l1);
		
		assertEquals(1001, l1.getUserId());
		assertEquals(2001, l1.getISBN());
		assertEquals(3, l1.getCopyNumber());
		assertEquals(0, l1.getRenewed());

		l1.renew();
		assertEquals(1, l1.getRenewed());
		
		db.saveChanges(l1);
		assertEquals(1, db.findLoan(l1.getISBN(), l1.getCopyNumber()).getRenewed());
	}
	
	@Test
	public void testSave() {
		Loan l1 = new Loan(1001, 2001, 2, new Date());
		db.addLoan(l1);

		db = new LoanDatabase();
		try {
			db.loadLoans();
		} catch (IOException e) {
			fail("Failed to load loans");
		}

		Loan l2 = db.findLoan(l1.getISBN(), l1.getCopyNumber());
		assertNotNull(l2);
		assertTrue(l1.equals(l2));

		db = new LoanDatabase();
		try {
			db.loadLoans();
		} catch (IOException e) {
			fail("Failed to load loans");
		}

		db.deleteLoan(l1.getISBN(), l1.getCopyNumber());
		assertNull(db.findLoan(l1.getISBN(), l1.getCopyNumber()));
	}
	
	@Test
	public void testGetUserSpecific() {
		Loan l1 = new Loan(1001, 3000, 1, new Date());
		Loan l2 = new Loan(1001, 3001, 1, new Date());
		Loan l3 = new Loan(1001, 3002, 1, new Date());
		Loan l4 = new Loan(1002, 3000, 2, new Date());
		db.addLoan(l1);
		db.addLoan(l2);
		db.addLoan(l3);
		db.addLoan(l4);
	
		List<Loan> loans = db.getLoans(1001);
		assertNotNull(loans);
		assertEquals(3, loans.size());
		assertTrue(loans.contains(l1));
		assertTrue(loans.contains(l2));
		assertTrue(loans.contains(l3));
		assertFalse(loans.contains(l4));
		
		loans = db.getLoans(1002);
		assertNotNull(loans);
		assertEquals(1, loans.size());
		assertFalse(loans.contains(l1));
		assertFalse(loans.contains(l2));
		assertFalse(loans.contains(l3));
		assertTrue(loans.contains(l4));
		
	}
	
	@Test
	public void testDeleteUser() {
		Loan l1 = new Loan(2001, 4000, 1, new Date());
		Loan l2 = new Loan(2001, 4001, 1, new Date());
		Loan l3 = new Loan(2001, 4002, 1, new Date());
		Loan l4 = new Loan(2002, 4000, 2, new Date());
		db.addLoan(l1);
		db.addLoan(l2);
		db.addLoan(l3);
		db.addLoan(l4);
	
		List<Loan> loans = db.getLoans(2001);
		assertNotNull(loans);
		assertEquals(3, loans.size());

		db.deleteUserLoan(2001);
		loans = db.getLoans(2001);
		assertNotNull(loans);
		assertEquals(0, loans.size());
		
		loans = db.getLoans(1002);
		assertNotNull(loans);
		assertEquals(1, loans.size());
		
		db.deleteUserLoan(2002);
		loans = db.getLoans(2002);
		assertNotNull(loans);
		assertEquals(0, loans.size());
	}
	
	@Test
	public void testDeleteISBN() {
		Loan l1 = new Loan(3001, 5000, 1, new Date());
		Loan l2 = new Loan(3001, 5001, 1, new Date());
		Loan l3 = new Loan(3001, 5002, 1, new Date());
		Loan l4 = new Loan(3002, 5000, 2, new Date());
		db.addLoan(l1);
		db.addLoan(l2);
		db.addLoan(l3);
		db.addLoan(l4);
	
		db.deleteLoan(5001);
		
		assertNotNull(db.findLoan(5000, 1));
		assertNull(db.findLoan(5001, 1));
		assertNotNull(db.findLoan(5002, 1));
		assertNotNull(db.findLoan(5000, 2));
		
		db.deleteLoan(5000);
		
		assertNull(db.findLoan(5000, 1));
		assertNull(db.findLoan(5001, 1));
		assertNotNull(db.findLoan(5002, 1));
		assertNull(db.findLoan(5000, 2));
		
		db.deleteLoan(5002);
		
		assertNull(db.findLoan(5000, 1));
		assertNull(db.findLoan(5001, 1));
		assertNull(db.findLoan(5002, 1));
		assertNull(db.findLoan(5000, 2));
	}
	
}
