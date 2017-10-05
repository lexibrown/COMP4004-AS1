package com.comp4004.database;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.comp4004.model.User;

public class Database {

	private List<User> users = null;

	public Database() {
		users = new ArrayList<User>();

	}

	public void loadUsers() throws IOException {

	}
	
	public List<User> getUsers() {
		return users;
	}
	
	public void addUser(User u) {
	
	}

	public void delete(String username) {
		
	}
	
	public User findUser(String username) {
		return null;
	}
	
}
