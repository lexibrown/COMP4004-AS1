package com.comp4004.server;

import java.io.IOException;
import java.util.List;

import com.comp4004.database.BookDatabase;
import com.comp4004.database.LoanDatabase;
import com.comp4004.database.ReservationDatabase;
import com.comp4004.database.UserDatabase;
import com.comp4004.model.Book;
import com.comp4004.model.Copy;
import com.comp4004.model.Loan;
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
		User u = userDatabase.findUser(username);
		if (u != null) {
			userDatabase.deleteUser(username);
			loanDatabase.deleteUserLoan(u.getUserId());
			reservationDatabase.deleteUserReservation(u.getUserId());
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
			loanDatabase.deleteLoan(iSBN);
			reservationDatabase.deleteReservation(iSBN);
			return true;
		}
		return false;
	}

	public synchronized boolean removeBook(String title) {
		Book b = bookDatabase.findBook(title);
		if (b != null) {
			bookDatabase.deleteBook(title);
			loanDatabase.deleteLoan(b.getISBN());
			reservationDatabase.deleteReservation(b.getISBN());
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
			loanDatabase.deleteLoan(iSBN, copyNumber);
			reservationDatabase.deleteReservation(iSBN, copyNumber);
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

	public String userInfo(User u) {
		String user = u.toString() + "\n";
		user += "\tFees: " + u.getFees();
		
		user += "\n\tReservations:";
		List<Reservation> reservations = reservationDatabase.getReservations(u.getUserId());
		if (reservations.isEmpty()) {
			user += "\n\t\tUser has no reservations";
		} else {
			for (Reservation r : reservations) {
				user += "\n\t\t" + r.toString();
			}
		}
		
		user += "\n\tLoans:";
		List<Loan> loans = loanDatabase.getLoans(u.getUserId());
		if (loans.isEmpty()) {
			user += "\n\t\tUser has no loans";
		} else {
			for (Loan l : loans) {
				user += "\n\t\t" + l.toString();
			}
		}
		
		return user;
	}

	public String bookInfo(Book b) {
		String book = b.toString() + "\n";

		for (int i = 1; i <= b.numCopies(); i++) {
			book += "\t" + b.getCopy(i).toString();
			if (loanDatabase.findLoan(b.getISBN(), i) != null) {
				book += "[LOANED] ";
			}
			if (reservationDatabase.findReservation(b.getISBN(), i) != null) {
				book += "[RESERVED]";
			}
			book += "\n";
		}
				
		return book;
	}

}
