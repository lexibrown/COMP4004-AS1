package com.comp4004.test;

import static org.junit.Assert.*;

import java.io.IOException;

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
			fail("Failed to load users");
		}
		assertNotNull(db.getUsers());
	}

	@Test
	public void testAdd() {
		User u1 = new User(8000, "test1", "pass1");
		db.addUser(u1);
		User u2 = db.findUser(u1.getUsername());
		assertTrue(u2.equals(u2));
	}	
	
	@Test
	public void testDelete() {
		User u1 = new User(8000, "test2", "pass2");
		db.addUser(u1);
		db.deleteUser(u1.getUsername());
		assertNull(db.findUser(u1.getUsername()));
	}

}
