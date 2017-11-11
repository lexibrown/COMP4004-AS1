package main.java.com.comp4004.database;

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

import main.java.com.comp4004.model.Book;
import main.java.com.comp4004.utils.Config;
import main.java.com.comp4004.utils.JsonUtil;

public class BookDatabase {

	private List<Book> books = null; // array of all library books

	public BookDatabase() {
		books = new ArrayList<Book>();
	}

	/**
	 * Load books from file database
	 * 
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public void loadBooks() throws IOException {
		File f = new File(Config.DATABASE_BOOKS);
		if (!f.exists()) {
			f.createNewFile();
		}
		String content = new String(Files.readAllBytes(Paths.get(Config.DATABASE_BOOKS)), StandardCharsets.UTF_8);
		if (content == null || content.isEmpty()) {
			this.books = new ArrayList<Book>();
		} else {
			this.books = (List<Book>) JsonUtil.parseList(content, Book.class);
		}
	}

	/**
	 * Save current list of books to file
	 */
	private void saveChanges() {
		File file = new File(Config.DATABASE_BOOKS);
		DataOutputStream outstream;
		try {
			outstream = new DataOutputStream(new FileOutputStream(file, false));
			String content = JsonUtil.stringify(this.books);
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
	 * Update inputed book in list and update database file
	 * 
	 * @param book
	 */
	public void saveChanges(Book book) {
		for (int i = 0; i < this.books.size(); i++) {
			Book b = this.books.get(i);
			if (book.getISBN() == b.getISBN()) {
				this.books.set(i, book);
				saveChanges();
				return;
			}
		}
	}

	/**
	 * Returns all books
	 * 
	 * @return
	 */
	public List<Book> getBooks() {
		return books;
	}

	/**
	 * Adds book to list and saves changes
	 * 
	 * @param b
	 */
	public void addBook(Book b) {
		this.books.add(b);
		saveChanges();
	}

	/**
	 * Finds book by ISBN and deletes it
	 * 
	 * @param ISBN
	 */
	public void deleteBook(int ISBN) {
		for (Book b : this.books) {
			if (ISBN == b.getISBN()) {
				this.books.remove(b);
				saveChanges();
				break;
			}
		}
	}

	/**
	 * Finds book by title and deletes it
	 * 
	 * @param title
	 */
	public void deleteBook(String title) {
		for (Book b : this.books) {
			if (title.equals(b.getTitle())) {
				this.books.remove(b);
				saveChanges();
				break;
			}
		}
	}

	/**
	 * Finds book by ISBN and returns it
	 * 
	 * @param ISBN
	 * @return
	 */
	public Book findBook(int ISBN) {
		for (Book b : this.books) {
			if (ISBN == b.getISBN()) {
				return b;
			}
		}
		return null;
	}

	/**
	 * Finds book by title and returns it
	 * 
	 * @param title
	 * @return
	 */
	public Book findBook(String title) {
		for (Book b : this.books) {
			if (title.equalsIgnoreCase(b.getTitle())) {
				return b;
			}
		}
		return null;
	}

	/**
	 * Clears database
	 */
	public void flush() {
		File f = new File(Config.DATABASE_BOOKS);
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
