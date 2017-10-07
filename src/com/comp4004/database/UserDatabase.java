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
import java.util.List;

import com.comp4004.model.User;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;

public class UserDatabase {

	private List<User> users = null;

	public UserDatabase() {
		users = new ArrayList<User>();

	}

	@SuppressWarnings("unchecked")
	public void loadUsers() throws IOException {
		File f = new File(Config.DATABASE_USERS);
		if (!f.exists()) {
			f.createNewFile();
		}
		String content = new String(Files.readAllBytes(Paths.get(Config.DATABASE_USERS)), StandardCharsets.UTF_8);
		if (content == null || content.isEmpty()) {
			this.users = new ArrayList<User>();
		} else {
			this.users = (List<User>) JsonUtil.parse(content, User.class);
		}
	}

	private void saveChanges() {
		File file = new File(Config.DATABASE_USERS);
		DataOutputStream outstream;
		try {
			outstream = new DataOutputStream(new FileOutputStream(file, false));
			String content = JsonUtil.stringify(this.users);
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

	public List<User> getUsers() {
		return users;
	}

	public void addUser(User u) {
		this.users.add(u);
		saveChanges();
	}

	public void deleteUser(String username) {
		for (User u : this.users) {
			if (username.equals(u.getUsername())) {
				this.users.remove(u);
				saveChanges();
				break;
			}
		}
	}

	public void deleteUser(int userId) {
		for (User u : this.users) {
			if (userId == u.getUserId()) {
				this.users.remove(u);
				saveChanges();
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
	
	public User findUser(int userId) {
		for (User u : this.users) {
			if (userId == u.getUserId()) {
				return u;
			}
		}
		return null;
	}
	
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

}
