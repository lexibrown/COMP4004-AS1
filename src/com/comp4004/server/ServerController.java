package com.comp4004.server;

import java.io.IOException;

import com.comp4004.database.BookDatabase;
import com.comp4004.database.LoanDatabase;
import com.comp4004.database.ReservationDatabase;
import com.comp4004.database.UserDatabase;
import com.comp4004.model.Book;
import com.comp4004.model.Copy;
import com.comp4004.model.Reservation;
import com.comp4004.model.User;
import com.comp4004.server.tools.ActionResult;
import com.comp4004.utils.Config;

public class ServerController {

	private Server server;

	private UserDatabase userDatabase;
	private LoanDatabase loanDatabase;
	private BookDatabase bookDatabase;
	private ReservationDatabase reservationDatabase;

	public ServerController(Server s) {
		server = s;
		server.setController(this);
		userDatabase = new UserDatabase();
		loanDatabase = new LoanDatabase();
		bookDatabase = new BookDatabase();
		reservationDatabase = new ReservationDatabase();
	}

	public void start() throws IOException {
		userDatabase.loadUsers();
		loanDatabase.loadLoans();
		bookDatabase.loadBooks();
		reservationDatabase.loadReservations();
		server.start();
	}

	public void stop() {
		userDatabase = null;
		loanDatabase = null;
		bookDatabase = null;
		reservationDatabase = null;
		server.shutdown();
	}

	public void clearData() {
		userDatabase.flush();
		loanDatabase.flush();
		bookDatabase.flush();
		reservationDatabase.flush();
	}

	public boolean isAdmin(String username, String password) {
		return Config.CLERK_USERNAME.equals(username) && Config.CLERK_PASSWORD.equals(password);
	}

	public synchronized boolean confirmUser(String username, String password) {
		User u = userDatabase.findUser(username);
		if (u == null || !password.equals(u.getPassword())) {
			return false;
		}
		return true;
	}

	public synchronized boolean createUser(String username, String password) {
		if (username == null || username.trim().isEmpty() || password == null || password.trim().isEmpty()) {
			return false;
		} else if (userDatabase.findUser(username) == null) {
			// TODO userid
			userDatabase.addUser(new User(0, username, password));
			return true;
		}
		return false;
	}

	public synchronized boolean removeUser(String username) {
		if (userDatabase.findUser(username) != null) {
			userDatabase.deleteUser(username);
			// TODO delete loans and reservations of user
			return true;
		}
		return false;
	}

	public synchronized User searchUser(String username) {
		return userDatabase.findUser(username);
	}

	public synchronized boolean addBook(int iSBN, String title) {
		if (title == null || title.trim().isEmpty()) {
			return false;
		} else if (bookDatabase.findBook(iSBN) == null) {
			bookDatabase.addBook(new Book(iSBN, title));
			return true;
		}
		return false;
	}

	public synchronized boolean removeBook(int iSBN) {
		if (bookDatabase.findBook(iSBN) != null) {
			bookDatabase.deleteBook(iSBN);
			// TODO delete loans and reservations
			return true;
		}
		return false;
	}

	public synchronized boolean removeBook(String title) {
		if (bookDatabase.findBook(title) != null) {
			bookDatabase.deleteBook(title);
			// TODO delete loans and reservations
			return true;
		}
		return false;
	}

	public synchronized Book searchBook(int iSBN) {
		return bookDatabase.findBook(iSBN);
	}

	public synchronized Book searchBook(String title) {
		return bookDatabase.findBook(title);
	}

	public synchronized boolean addCopy(int iSBN) {
		Book b = bookDatabase.findBook(iSBN);
		if (b != null) {
			b.addCopy(new Copy());
			bookDatabase.saveChanges(b);
			return true;
		}
		return false;
	}

	public synchronized boolean removeCopy(int iSBN, int copyNumber) {
		Book b = bookDatabase.findBook(iSBN);
		if (b != null && b.getCopy(copyNumber) != null) {
			b.deleteCopy(copyNumber);
			bookDatabase.saveChanges(b);
			// TODO delete loans and reservations
			return true;
		}
		return false;
	}

	public synchronized ActionResult reserve(int iSBN, int copyNumber, String username) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return ActionResult.NO_SUCH_USER;
		}
		
		Book b = bookDatabase.findBook(iSBN);
		if (b == null) {
			return ActionResult.NO_SUCH_BOOK;
		} else if (b.getCopy(copyNumber) == null) {
			return ActionResult.NO_SUCH_COPY;
		} else if (reservationDatabase.findReservation(iSBN, copyNumber) != null) {
			return ActionResult.RESERVATION_EXISTS;
		}
		reservationDatabase.addReservation(new Reservation(u.getUserId(), b.getISBN(), copyNumber));
		return ActionResult.RESERVATION_MADE;
	}

	public synchronized boolean removeReservation(int iSBN, int copyNumber, String username) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return false;
		} else if (reservationDatabase.findReservation(iSBN, copyNumber, u.getUserId()) != null) {
			reservationDatabase.deleteReservation(iSBN, copyNumber);
			return true;
		}
		return false;
	}

}
