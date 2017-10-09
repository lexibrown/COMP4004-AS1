package com.comp4004.model;

import java.io.Serializable;

public class Copy implements Serializable {

	private static final long serialVersionUID = 3564527311838280374L;
	private int isbn = 0;
	private int copyNumber = 0;

	public Copy() {
		this.setISBN(0);
		this.setCopyNumber(0);
	}

	public int getISBN() {
		return this.isbn;
	}

	public void setISBN(int isbn) {
		this.isbn = isbn;
	}

	public int getCopyNumber() {
		return this.copyNumber;
	}

	public void setCopyNumber(int copyNumber) {
		this.copyNumber = copyNumber;
	}
	
	public String toString() {
		return this.isbn + " [" + this.copyNumber + "]";
	}

}
