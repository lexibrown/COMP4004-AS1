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
	public void testSave() {
		User u1 = new User(8003, "test3", "pass3");
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
