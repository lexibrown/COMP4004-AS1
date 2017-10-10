package com.comp4004.database;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.comp4004.model.User;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;

public class UserDatabase {

	private static final String USERS_STRING = "users";
	private static final String ID_STRING = "nextId";
	
	private List<User> users = null; // list of all users
	private int nextId = 0; // userID
	
	public UserDatabase() {
		users = new ArrayList<User>();
		nextId = 0;
	}

	/**
	 * Load users from file database
	 * 
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public void loadUsers() throws IOException {
		File f = new File(Config.DATABASE_USERS);
		if (!f.exists()) {
			f.createNewFile();
		}
		String content = new String(Files.readAllBytes(Paths.get(Config.DATABASE_USERS)), StandardCharsets.UTF_8);
		if (content == null || content.isEmpty()) {
			this.users = new ArrayList<User>();
			this.nextId = 0;
		} else {
			Map<String, Object> items = JsonUtil.parse(content, Map.class);
			this.users = (List<User>) JsonUtil.parseList(items.get(USERS_STRING).toString(), User.class);
			this.nextId = Integer.valueOf(items.get(ID_STRING).toString());
		}
	}

	/**
	 * Save current list of users to file
	 */
	private void saveChanges() {
		File file = new File(Config.DATABASE_USERS);
		DataOutputStream outstream;
		try {
			Map<String, Object> items = new HashMap<String, Object>();
			items.put(USERS_STRING, JsonUtil.stringify(this.users));
			items.put(ID_STRING, this.nextId);
			
			outstream = new DataOutputStream(new FileOutputStream(file, false));
			String content = JsonUtil.stringify(items);
			outstream.write(content.getBytes());
			outstream.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Update inputed user in list and update database file
	 * 
	 * @param user
	 */
	public void saveChanges(User user) {
		for (int i = 0; i < this.users.size(); i++) {
			User u = this.users.get(i);
			if (user.getUserId() == u.getUserId()) {
				this.users.set(i, user);
				saveChanges();
				return;
			}
		}
	}

	/**
	 * Returns all users
	 * 
	 * @return
	 */
	public List<User> getUsers() {
		return users;
	}

	/**
	 * Adds user and saves changes
	 * 
	 * @param u
	 */
	public void addUser(User u) {
		this.users.add(u);
		saveChanges();
	}

	/**
	 * Deletes user with username
	 * 
	 * @param username
	 */
	public void deleteUser(String username) {
		for (User u : this.users) {
			if (username.equals(u.getUsername())) {
				this.users.remove(u);
				saveChanges();
				break;
			}
		}
	}

	/**
	 * Deletes user with userId
	 * 
	 * @param userId
	 */
	public void deleteUser(int userId) {
		for (User u : this.users) {
			if (userId == u.getUserId()) {
				this.users.remove(u);
				saveChanges();
				break;
			}
		}
	}

	/**
	 * Finds user by username
	 * 
	 * @param username
	 * @return
	 */
	public User findUser(String username) {
		for (User u : this.users) {
			if (username.equals(u.getUsername())) {
				return u;
			}
		}
		return null;
	}

	/**
	 * Finds user by userId
	 * 
	 * @param userId
	 * @return
	 */
	public User findUser(int userId) {
		for (User u : this.users) {
			if (userId == u.getUserId()) {
				return u;
			}
		}
		return null;
	}

	/**
	 * Clear database
	 */
	public void flush() {
		File f = new File(Config.DATABASE_USERS);
		if (f.exists()) {
			try {
				f.delete();
				f.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public int getNextId() {
		nextId++;
		return nextId;
	}

}
