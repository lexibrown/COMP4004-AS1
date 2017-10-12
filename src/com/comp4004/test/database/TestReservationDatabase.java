package com.comp4004.test.database;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import com.comp4004.database.ReservationDatabase;
import com.comp4004.model.Reservation;

public class TestReservationDatabase {

	private ReservationDatabase db;

	// tests loading reservations from file
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

	// clears test data after tests finish
	@AfterClass
	public static void clear() {
		ReservationDatabase db = new ReservationDatabase();
		db.flush();
	}

	// tests adding a reservation
	@Test
	public void testAdd() {
		Reservation r1 = new Reservation(1001, 2001, 1);
		db.addReservation(r1);
		Reservation r2 = db.findReservation(r1.getISBN(), r1.getCopyNumber());
		assertNotNull(r2);
		assertTrue(r1.equals(r2));
	}

	// tests deleting a reservation
	@Test
	public void testDelete() {
		Reservation r1 = new Reservation(1001, 2001, 2);
		db.addReservation(r1);
		db.deleteReservation(r1.getISBN(), r1.getCopyNumber());
		assertNull(db.findReservation(r1.getISBN(), r1.getCopyNumber()));
	}

	// tests saving individual reservations to file
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

		Reservation r2 = db.findReservation(r1.getISBN(), r1.getCopyNumber());
		assertNotNull(r2);
		assertTrue(r1.equals(r2));

		db = new ReservationDatabase();
		try {
			db.loadReservations();
		} catch (IOException e) {
			fail("Failed to load reservations");
		}

		db.deleteReservation(r1.getISBN(), r1.getCopyNumber());
		assertNull(db.findReservation(r1.getISBN(), r1.getCopyNumber(), r1.getUserId()));
	}

	// tests getting all reservations owned by a user
	@Test
	public void testGetUserSpecific() {
		Reservation r1 = new Reservation(2001, 1, 1);
		Reservation r2 = new Reservation(2001, 2, 1);
		Reservation r3 = new Reservation(2001, 2, 2);
		Reservation r4 = new Reservation(2002, 3, 1);
		db.addReservation(r1);
		db.addReservation(r2);
		db.addReservation(r3);
		db.addReservation(r4);

		List<Reservation> res = db.getUserReservations(2001);
		assertNotNull(res);
		assertEquals(3, res.size());
		assertTrue(res.contains(r1));
		assertTrue(res.contains(r2));
		assertTrue(res.contains(r3));
		assertFalse(res.contains(r4));

		res = db.getUserReservations(2002);
		assertNotNull(res);
		assertEquals(1, res.size());
		assertFalse(res.contains(r1));
		assertFalse(res.contains(r2));
		assertFalse(res.contains(r3));
		assertTrue(res.contains(r4));
	}

	// tests deleting all reservations owned by a user
	@Test
	public void testDeleteUser() {
		Reservation r1 = new Reservation(3001, 11, 1);
		Reservation r2 = new Reservation(3001, 22, 1);
		Reservation r3 = new Reservation(3001, 22, 2);
		Reservation r4 = new Reservation(3002, 33, 1);
		db.addReservation(r1);
		db.addReservation(r2);
		db.addReservation(r3);
		db.addReservation(r4);

		List<Reservation> res = db.getUserReservations(3001);
		assertNotNull(res);
		assertEquals(3, res.size());

		db.deleteUserReservation(3001);
		;
		res = db.getUserReservations(3001);
		assertNotNull(res);
		assertEquals(0, res.size());

		res = db.getUserReservations(3002);
		assertNotNull(res);
		assertEquals(1, res.size());

		db.deleteUserReservation(2002);
		res = db.getUserReservations(2002);
		assertNotNull(res);
		assertEquals(0, res.size());
	}

	// tests deleting all reservations of a given ISBN
	@Test
	public void testDeleteISBN() {
		Reservation r1 = new Reservation(4001, 111, 1);
		Reservation r2 = new Reservation(4001, 222, 1);
		Reservation r3 = new Reservation(4001, 222, 2);
		Reservation r4 = new Reservation(4002, 333, 1);
		db.addReservation(r1);
		db.addReservation(r2);
		db.addReservation(r3);
		db.addReservation(r4);

		db.deleteReservation(111);

		assertNull(db.findReservation(111, 1));
		assertNotNull(db.findReservation(222, 1));
		assertNotNull(db.findReservation(222, 2));
		assertNotNull(db.findReservation(333, 1));

		db.deleteReservation(222);

		assertNull(db.findReservation(111, 1));
		assertNull(db.findReservation(222, 1));
		assertNull(db.findReservation(222, 2));
		assertNotNull(db.findReservation(333, 1));

		db.deleteReservation(333);

		assertNull(db.findReservation(111, 1));
		assertNull(db.findReservation(222, 1));
		assertNull(db.findReservation(222, 2));
		assertNull(db.findReservation(333, 1));
	}

}