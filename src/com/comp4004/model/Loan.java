package com.comp4004.model;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Loan implements Serializable {

	private static final long serialVersionUID = 440701642802842246L;
	private int userId = 0;
	private int isbn = 0;
	private int copyNumber = 0;
	private Date date = null;
	private int renewed = 0;

	public Loan() {
		this.userId = 0;
		this.isbn = 0;
		this.copyNumber = 0;
		this.date = new Date();
		this.renewed = 0;
	}

	public Loan(int userId, int ISBN, int copyNumber, Date date) {
		this.userId = userId;
		this.isbn = ISBN;
		this.copyNumber = copyNumber;
		this.date = date;
		this.renewed = 0;
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

	public Date getDate() {
		return this.date;
	}

	public int getRenewed() {
		return this.renewed;
	}
	
	public void renew() {
		this.renewed++;
	}

	public void updateDate(Date date) {
		this.date = date;
	}
	
	public String toString() {
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm");
		return this.isbn + " [" + this.copyNumber + "] Date: " + formatter.format(this.date) + " User: " + this.userId
				+ " Renewed: " + this.renewed;
	}

}
