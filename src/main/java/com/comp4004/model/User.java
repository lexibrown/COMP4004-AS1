package main.java.com.comp4004.model;

import java.io.Serializable;

public class User implements Serializable {

	private static final long serialVersionUID = -4128122965977874048L;
	private int userId = 0;
	private String username = "";
	private String password = "";
	private int fees = 0;
	private boolean hasPrivilege = true;

	public User() {
		userId = 0;
		username = "";
		password = "";
		fees = 0;
		hasPrivilege = true;
	}

	public User(int id, String username, String password) {
		this.userId = id;
		this.username = username;
		this.password = password;
		this.fees = 0;
		this.hasPrivilege = true;
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

	public int getFees() {
		return fees;
	}

	public boolean hasPrivilege() {
		return hasPrivilege;
	}

	public void revokePrivilege() {
		this.hasPrivilege = false;
	}

	public void unrevoke() {
		this.hasPrivilege = true;
	}

	public void addFee(int fee) {
		this.fees += fee;
	}

	/**
	 * Subtracts fee from user but doesn't allow fee value to go below zero
	 * 
	 * @param fee
	 */
	public void payFee(int fee) {
		this.fees = this.fees - fee < 0 ? 0 : this.fees - fee;
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
