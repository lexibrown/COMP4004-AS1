package main.java.com.comp4004.model;

import java.io.Serializable;

public class Reservation implements Serializable {

	private static final long serialVersionUID = -6650943575358806756L;
	private int userId = 0;
	private int isbn = 0;
	private int copyNumber = 0;

	public Reservation() {
		this.userId = 0;
		this.isbn = 0;
		this.copyNumber = 0;
	}

	public Reservation(int userId, int ISBN, int copyNumber) {
		this.userId = userId;
		this.isbn = ISBN;
		this.copyNumber = copyNumber;
	}

	public int getUserId() {
		return this.userId;
	}

	public int getISBN() {
		return this.isbn;
	}

	public int getCopyNumber() {
		return this.copyNumber;
	}

	public String toString() {
		return this.userId + " [" + this.isbn + "] [" + this.copyNumber + "]";
	}

	public boolean equals(Object obj) {
		if ((obj == null) || (getClass() != obj.getClass())) {
			return false;
		}
		Reservation other = (Reservation) obj;
		return this.userId == other.getUserId() && this.isbn == other.getISBN()
				&& this.copyNumber == other.getCopyNumber();
	}

}
