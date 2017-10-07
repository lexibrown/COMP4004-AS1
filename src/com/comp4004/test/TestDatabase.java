package com.comp4004.test;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import com.comp4004.database.Database;
import com.comp4004.model.User;

public class TestDatabase {

	Database db;

	@Before
	public void testLoad() {
		db = new Database();
		try {
			db.loadUsers();
		} catch (IOException e) {
			e.printStackTrace();
			fail("Failed to load users");
		}
		assertNotNull(db.getUsers());
	}

	@AfterClass
	public static void clear() {
		Database db = new Database();
		db.flush();
	}

	@Test
	public void testAdd() {
		User u1 = new User(8001, "test1", "pass1");
		db.addUser(u1);
		User u2 = db.findUser(u1.getUsername());
		assertNotNull(u2);
		assertTrue(u1.equals(u2));
	}

	@Test
	public void testDelete() {
		User u1 = new User(8002, "test2", "pass2");
		db.addUser(u1);
		db.deleteUser(u1.getUsername());
		assertNull(db.findUser(u1.getUsername()));
	}
	
	@Test
	public void testDeleteById() {
		User u1 = new User(80022, "test22", "pass22");
		db.addUser(u1);
		db.deleteUser(u1.getUserId());
		assertNull(db.findUser(u1.getUserId()));
	}
	
	@Test
	public void testFindById() {
		User u1 = new User(8003, "test3", "pass3");
		User u2 = new User(8004, "test4", "pass4");
		db.addUser(u1);
		db.addUser(u2);
		
		assertNotNull(db.findUser(u1.getUserId()));
		assertTrue(u1.equals(db.findUser(u1.getUserId())));

		assertNotNull(db.findUser(u2.getUserId()));
		assertTrue(u2.equals(db.findUser(u2.getUserId())));
	}

	@Test
	public void testFees() {
		User u1 = new User(8005, "test5", "pass5");
		db.addUser(u1);

		int fee1 = 20;
		int fee2 = 10;
		u1.addFee(fee1);
		u1.addFee(fee2);
		assertEquals(fee1 + fee2, u1.getFees());

		db.saveChanges(u1);
		assertEquals(fee1 + fee2, db.findUser(u1.getUsername()).getFees());
		
		u1.payFee(fee1);
		assertEquals(fee2, u1.getFees());

		db.saveChanges(u1);
		assertEquals(fee2, db.findUser(u1.getUsername()).getFees());
		
		u1.payFee(fee2 + 10);
		assertEquals(0, u1.getFees());
		
		db.saveChanges(u1);
		assertEquals(0, db.findUser(u1.getUsername()).getFees());
	}

	@Test
	public void testSave() {
		User u1 = new User(8006, "test6", "pass6");
		db.addUser(u1);

		db = new Database();
		try {
			db.loadUsers();
		} catch (IOException e) {
			fail("Failed to load users");
		}

		User u2 = db.findUser(u1.getUsername());
		assertNotNull(u2);
		assertTrue(u1.equals(u2));

		db = new Database();
		try {
			db.loadUsers();
		} catch (IOException e) {
			fail("Failed to load users");
		}

		db.deleteUser(u1.getUsername());
		assertNull(db.findUser(u1.getUsername()));
	}

}
