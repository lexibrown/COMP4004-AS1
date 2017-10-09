package com.comp4004.test.database;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import com.comp4004.database.ReservationDatabase;
import com.comp4004.model.Reservation;

public class TestReservationDatabase {

	ReservationDatabase db;

	@Before
	public void testLoad() {
		db = new ReservationDatabase();
		try {
			db.loadReservations();
		} catch (IOException e) {
			e.printStackTrace();
			fail("Failed to load reservations");
		}
		assertNotNull(db.getReservations());
	}

	@AfterClass
	public static void clear() {
		ReservationDatabase db = new ReservationDatabase();
		db.flush();
	}

	@Test
	public void testAdd() {
		Reservation r1 = new Reservation(1001, 2001, 1);
		db.addReservation(r1);
		Reservation r2 = db.findReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId());
		assertNotNull(r2);
		assertTrue(r1.equals(r2));
	}

	@Test
	public void testDelete() {
		Reservation r1 = new Reservation(1001, 2001, 2);
		db.addReservation(r1);
		db.deleteReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId());
		assertNull(db.findReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId()));
	}

	@Test
	public void testSave() {
		Reservation r1 = new Reservation(1001, 2002, 1);
		db.addReservation(r1);

		db = new ReservationDatabase();
		try {
			db.loadReservations();
		} catch (IOException e) {
			fail("Failed to load reservations");
		}

		Reservation r2 = db.findReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId());
		assertNotNull(r2);
		assertTrue(r1.equals(r2));

		db = new ReservationDatabase();
		try {
			db.loadReservations();
		} catch (IOException e) {
			fail("Failed to load reservations");
		}

		db.deleteReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId());
		assertNull(db.findReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId()));
	}
	
}