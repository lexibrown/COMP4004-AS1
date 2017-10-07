package com.comp4004.model;

import java.io.Serializable;

public class User implements Serializable {

	private static final long serialVersionUID = -4128122965977874048L;
	private int userId = 0;
	private String username = "";
	private String password = "";

	public User() {
		userId = 0;
		username = "";
		password = "";
	}
	
	public User(int id, String username, String password) {
		this.userId = id;
		this.username = username;
		this.password = password;
	}

	public int getUserId() {
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
		return this.getUserId() == other.getUserId() && this.getUsername().equals(other.getUsername())
				&& this.getPassword().equals(other.getPassword());
	}

}
