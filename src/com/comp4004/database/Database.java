package com.comp4004.database;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.comp4004.model.User;
import com.comp4004.utils.Config;

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
		this.users.add(u);
	}

	public void deleteUser(String username) {
		for (User u : this.users) {
			if (username.equals(u.getUsername())) {
				this.users.remove(u);
				break;
			}
		}
	}
	
	public User findUser(String username) {
		for (User u : this.users) {
			if (username.equals(u.getUsername())) {
				return u;
			}
		}
		return null;
	}
	
}
