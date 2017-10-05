package com.comp4004.model;

public class User {

	private int userId;
	private String username = null;
	private String password = null;

	public User(int id, String username, String password) {
		this.userId = id;
		this.username = username;
		this.password = password;
	}

	public int getId() {
		return this.userId;
	}

	public String getUsername() {
		return this.username;
	}

	public String getPassword() {
		return this.password;
	}

	public String toString() {
		return "[" + this.userId + "]: " + this.username + ", " + this.password;
	}

	public boolean equals(Object obj) {
		if ((obj == null) || (getClass() != obj.getClass())) {
			return false;
		}
		User other = (User) obj;
		return this.getId() == other.getId() && this.getUsername().equals(other.getUsername())
				&& this.getPassword().equals(other.getPassword());
	}

}
