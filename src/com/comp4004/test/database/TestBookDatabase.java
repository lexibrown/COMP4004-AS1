package com.comp4004.test.database;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import com.comp4004.database.BookDatabase;
import com.comp4004.model.Book;
import com.comp4004.model.Copy;

public class TestBookDatabase {

	private BookDatabase db;

	// tests loading of books from file
	@Before
	public void testLoad() {
		db = new BookDatabase();
		try {
			db.loadBooks();
		} catch (IOException e) {
			e.printStackTrace();
			fail("Failed to load books");
		}
		assertNotNull(db.getBooks());
	}

	// clears test data after tests end
	@AfterClass
	public static void clear() {
		BookDatabase db = new BookDatabase();
		db.flush();
	}

	// tests adding a book
	@Test
	public void testAdd() {
		Book b1 = new Book(1001, "book1");
		db.addBook(b1);
		Book b2 = db.findBook(b1.getISBN());
		assertNotNull(b2);
		assertTrue(b1.equals(b2));
	}

	// tests removing a book
	@Test
	public void testDelete() {
		Book b1 = new Book(1002, "book2");
		db.addBook(b1);
		db.deleteBook(b1.getISBN());
		assertNull(db.findBook(b1.getISBN()));
	}

	// tests removing a book by its title
	@Test
	public void testDeleteByTitle() {
		Book b1 = new Book(10022, "book22");
		db.addBook(b1);
		db.deleteBook(b1.getTitle());
		assertNull(db.findBook(b1.getTitle()));
	}

	// tests finding a book by its title
	@Test
	public void testFindByTitle() {
		Book b1 = new Book(1003, "book3");
		Book b2 = new Book(1004, "book4");
		db.addBook(b1);
		db.addBook(b2);

		assertNotNull(db.findBook(b1.getTitle()));
		assertTrue(b1.equals(db.findBook(b1.getTitle())));

		assertNotNull(db.findBook(b2.getTitle()));
		assertTrue(b2.equals(db.findBook(b2.getTitle())));
	}

	// tests adding and removing a copy
	@Test
	public void testCopy() {
		Book b1 = new Book(1005, "book5");

		b1.addCopy(new Copy());
		b1.addCopy(new Copy());
		b1.addCopy(new Copy());
		assertEquals(3, b1.numCopies());

		db.addBook(b1);
		db.saveChanges(b1);
		assertEquals(3, db.findBook(b1.getISBN()).numCopies());

		Copy c1 = b1.getCopy(1);
		assertEquals(1, c1.getCopyNumber());
		assertEquals(b1.getISBN(), c1.getISBN());

		b1.deleteCopy(2);
		assertEquals(2, b1.numCopies());

		db.saveChanges(b1);
		assertEquals(2, db.findBook(b1.getISBN()).numCopies());

		assertNull(b1.getCopy(2));
		assertNull(db.findBook(b1.getISBN()).getCopy(2));

		assertNotNull(b1.getCopy(3));
		assertNotNull(db.findBook(b1.getISBN()).getCopy(3));

		b1.deleteCopy(2);
		assertEquals(2, b1.numCopies());

		db.saveChanges(b1);
		assertEquals(2, db.findBook(b1.getISBN()).numCopies());

		b1.addCopy(new Copy());

		assertEquals(3, b1.numCopies());

		db.saveChanges(b1);
		assertEquals(3, db.findBook(b1.getISBN()).numCopies());

		assertNull(b1.getCopy(4));
		assertNull(db.findBook(b1.getISBN()).getCopy(4));

		assertNotNull(b1.getCopy(2));
		assertNotNull(db.findBook(b1.getISBN()).getCopy(2));
	}

	// tests saving individual books to file
	@Test
	public void testSave() {
		Book b1 = new Book(1006, "book6");
		db.addBook(b1);

		db = new BookDatabase();
		try {
			db.loadBooks();
		} catch (IOException e) {
			fail("Failed to load books");
		}

		Book b2 = db.findBook(b1.getISBN());
		assertNotNull(b2);
		assertTrue(b1.equals(b2));

		db = new BookDatabase();
		try {
			db.loadBooks();
		} catch (IOException e) {
			fail("Failed to load books");
		}

		db.deleteBook(b1.getISBN());
		assertNull(db.findBook(b1.getISBN()));
	}
}
