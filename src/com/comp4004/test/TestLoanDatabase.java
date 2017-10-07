package com.comp4004.test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.Date;

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
}
