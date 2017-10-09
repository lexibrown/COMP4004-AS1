package com.comp4004.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Book implements Serializable {

	private static final long serialVersionUID = -2747582023981973564L;
	private int isbn = 0;
	private String title = "";
	private List<Copy> copies = new ArrayList<Copy>();

	public Book() {
		isbn = 0;
		title = "";
		copies = new ArrayList<Copy>();
	}

	public Book(int ISBN, String title) {
		this.isbn = ISBN;
		this.title = title;
		copies = new ArrayList<Copy>();
	}

	public int getISBN() {
		return this.isbn;
	}

	public String getTitle() {
		return this.title;
	}

	public List<Copy> getCopies() {
		return this.copies;
	}

	public Copy getCopy(int copyNumber) {
		for (Copy c : this.copies) {
			if (c.getCopyNumber() == copyNumber) {
				return c;
			}
		}
		return null;
	}

	public int numCopies() {
		return this.copies.size();
	}

	public void addCopy(Copy c) {		
		int n = 1;
		for (int i = 0; i < this.numCopies(); i++) {
			if (this.copies.get(i).getCopyNumber() != n) {
				break;
			}
			n++;
		}
		
		c.setISBN(this.getISBN());
		c.setCopyNumber(n);
		
		this.copies.add(c);
		Collections.sort(this.copies, new Comparator<Copy>() {
			public int compare(Copy c1, Copy c2) {
				return c1.getCopyNumber() < c2.getCopyNumber() ? -1 : 1;
			}
		});
	}

	public void deleteCopy(int copyNumber) {
		for (Copy c : this.copies) {
			if (c.getCopyNumber() == copyNumber) {
				this.copies.remove(c);
			}
		}
	}

	public String toString() {
		return this.isbn + ", " + this.title + " [Copies: " + this.numCopies() + "]";
	}

	public boolean equals(Object obj) {
		if ((obj == null) || (getClass() != obj.getClass())) {
			return false;
		}
		Book other = (Book) obj;
		return this.getISBN() == other.getISBN() && this.getTitle().equals(other.getTitle());
	}

}
