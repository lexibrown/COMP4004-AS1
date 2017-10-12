package com.comp4004.server;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

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

	private UserDatabase userDatabase; // user database
	private LoanDatabase loanDatabase; // loan database
	private BookDatabase bookDatabase; // book database
	private ReservationDatabase reservationDatabase; // reservation database

	public ServerController(Server s) {
		server = s;
		server.setController(this);
		userDatabase = new UserDatabase();
		loanDatabase = new LoanDatabase();
		bookDatabase = new BookDatabase();
		reservationDatabase = new ReservationDatabase();
	}

	/**
	 * Load databases and start server
	 * 
	 * @throws IOException
	 */
	public void start() throws IOException {
		userDatabase.loadUsers();
		loanDatabase.loadLoans();
		bookDatabase.loadBooks();
		reservationDatabase.loadReservations();
		server.start();
	}

	/**
	 * Close databases and shutdown server
	 */
	public void stop() {
		userDatabase = null;
		loanDatabase = null;
		bookDatabase = null;
		reservationDatabase = null;
		server.shutdown();
	}

	/**
	 * Clear databases
	 */
	public void clearData() {
		userDatabase.flush();
		loanDatabase.flush();
		bookDatabase.flush();
		reservationDatabase.flush();
	}

	/**
	 * Return if username and password give admin privileges
	 * 
	 * @param username
	 * @param password
	 * @return
	 */
	public boolean isAdmin(String username, String password) {
		return Config.CLERK_USERNAME.equals(username) && Config.CLERK_PASSWORD.equals(password);
	}

	/**
	 * Return if username and password match existing user
	 * 
	 * @param username
	 * @param password
	 * @return
	 */
	public synchronized boolean confirmUser(String username, String password) {
		User u = userDatabase.findUser(username);
		if (u == null || !password.equals(u.getPassword())) {
			return false;
		}
		return true;
	}

	/**
	 * Create user with provided parameters
	 * 
	 * @param username
	 * @param password
	 * @return
	 */
	public synchronized boolean createUser(String username, String password) {
		if (username == null || username.trim().isEmpty() || password == null || password.trim().isEmpty()) {
			return false;
		} else if (userDatabase.findUser(username) == null) {
			userDatabase.addUser(new User(userDatabase.getNextId(), username, password));
			return true;
		}
		return false;
	}

	/**
	 * Removes user by username if user exists. Unless user has no privileges or
	 * has existing loans
	 * 
	 * @param username
	 * @return
	 */
	public synchronized ActionResult removeUser(String username) {
		User u = userDatabase.findUser(username);
		if (u != null) {
			if (!u.hasPrivilege()) {
				return ActionResult.NO_PRIVILEGE;
			} else if (!loanDatabase.getUserLoans(u.getUserId()).isEmpty()) {
				return ActionResult.HAS_LOANS;
			}
			userDatabase.deleteUser(username);
			reservationDatabase.deleteUserReservation(u.getUserId());
			return ActionResult.REMOVED_USER;
		}
		return ActionResult.NO_SUCH_USER;
	}

	/**
	 * Returns user if found in database
	 * 
	 * @param username
	 * @return
	 */
	public synchronized User searchUser(String username) {
		return userDatabase.findUser(username);
	}

	/**
	 * Adds book to database if book doesn't already exist
	 * 
	 * @param iSBN
	 * @param title
	 * @return
	 */
	public synchronized boolean addBook(int iSBN, String title) {
		if (title == null || title.trim().isEmpty()) {
			return false;
		} else if (bookDatabase.findBook(iSBN) == null) {
			bookDatabase.addBook(new Book(iSBN, title));
			return true;
		}
		return false;
	}

	/**
	 * Removes book if book exists. Unless book is being loaned or is reserved
	 * 
	 * @param iSBN
	 * @return
	 */
	public synchronized ActionResult removeBook(int iSBN) {
		if (bookDatabase.findBook(iSBN) != null) {
			if (!loanDatabase.getLoans(iSBN).isEmpty()) {
				return ActionResult.LOAN_EXISTS;
			} else if (!reservationDatabase.getReservations(iSBN).isEmpty()) {
				return ActionResult.RESERVATION_EXISTS;
			}
			bookDatabase.deleteBook(iSBN);
			return ActionResult.REMOVED_BOOK;
		}
		return ActionResult.NO_SUCH_BOOK;
	}

	/**
	 * Removes book by title if book exists. Unless book is being loaned or is
	 * reserved
	 * 
	 * @param title
	 * @return
	 */
	public synchronized ActionResult removeBook(String title) {
		Book b = bookDatabase.findBook(title);
		if (b != null) {
			if (!loanDatabase.getLoans(b.getISBN()).isEmpty()) {
				return ActionResult.LOAN_EXISTS;
			} else if (!reservationDatabase.getReservations(b.getISBN()).isEmpty()) {
				return ActionResult.RESERVATION_EXISTS;
			}
			bookDatabase.deleteBook(b.getISBN());
			return ActionResult.REMOVED_BOOK;
		}
		return ActionResult.NO_SUCH_BOOK;
	}

	/**
	 * Returns book from database if book exists
	 * 
	 * @param iSBN
	 * @return
	 */
	public synchronized Book searchBook(int iSBN) {
		return bookDatabase.findBook(iSBN);
	}

	/**
	 * Returns book from database if book exists
	 * 
	 * @param title
	 * @return
	 */
	public synchronized Book searchBook(String title) {
		return bookDatabase.findBook(title);
	}

	/**
	 * Adds copy to book if book exists
	 * 
	 * @param iSBN
	 * @return
	 */
	public synchronized boolean addCopy(int iSBN) {
		Book b = bookDatabase.findBook(iSBN);
		if (b != null) {
			b.addCopy(new Copy());
			bookDatabase.saveChanges(b);
			return true;
		}
		return false;
	}

	/**
	 * Removes copy if copy exists. Unless copy is being loaned or is reserved
	 * 
	 * @param iSBN
	 * @param copyNumber
	 * @return
	 */
	public synchronized ActionResult removeCopy(int iSBN, int copyNumber) {
		Book b = bookDatabase.findBook(iSBN);
		if (b == null) {
			return ActionResult.NO_SUCH_BOOK;
		} else if (b.getCopy(copyNumber) == null) {
			return ActionResult.NO_SUCH_COPY;
		} else if (loanDatabase.findLoan(iSBN, copyNumber) != null) {
			return ActionResult.LOAN_EXISTS;
		} else if (reservationDatabase.findReservation(iSBN, copyNumber) != null) {
			return ActionResult.RESERVATION_EXISTS;
		}

		b.deleteCopy(copyNumber);
		bookDatabase.saveChanges(b);
		return ActionResult.REMOVED_COPY;
	}

	/**
	 * Reserves copy of book if user exists and copy exists. Unless copy is
	 * already reserved
	 * 
	 * @param iSBN
	 * @param copyNumber
	 * @param username
	 * @return
	 */
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

	/**
	 * Removes reservation if reservation exists
	 * 
	 * @param iSBN
	 * @param copyNumber
	 * @param username
	 * @return
	 */
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

	/**
	 * Removes fee from user and unrevokes users privilege if applicable
	 * 
	 * @param username
	 * @param fee
	 * @return
	 */
	public synchronized boolean collectFee(String username, int fee) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return false;
		}
		u.payFee(fee);

		if (u.getFees() == 0 && !u.hasPrivilege()) {
			u.unrevoke();
		}

		userDatabase.saveChanges(u);
		return true;
	}

	/**
	 * Returns string representation of library system
	 * 
	 * @return
	 */
	public String monitorSystem() {
		String content = "";
		List<Book> books = bookDatabase.getBooks();
		List<User> users = userDatabase.getUsers();

		for (Book b : books) {
			content += bookInfo(b);
		}
		for (User u : users) {
			content += userInfo(u);
		}

		return content;
	}

	/**
	 * Creates loan for user if copy and user exists. Unless user has no
	 * privileges or user has reached the maximum amount of books they are
	 * allowed to borrow or copy is already borrowed or if copy is already
	 * reserved by someone else
	 * 
	 * @param username
	 * @param iSBN
	 * @param copyNumber
	 * @return
	 */
	public ActionResult borrow(String username, int iSBN, int copyNumber) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return ActionResult.NO_SUCH_USER;
		}

		Book b = bookDatabase.findBook(iSBN);
		if (b == null) {
			return ActionResult.NO_SUCH_BOOK;
		} else if (b.getCopy(copyNumber) == null) {
			return ActionResult.NO_SUCH_COPY;
		} else if (!u.hasPrivilege()) {
			return ActionResult.NO_PRIVILEGE;
		} else if (loanDatabase.getUserLoans(u.getUserId()).size() >= Config.MAX_BORROWED_ITEMS) {
			return ActionResult.MAX_LOAN;
		} else if (loanDatabase.findLoan(iSBN, copyNumber) != null) {
			return ActionResult.LOAN_EXISTS;
		} else if (reservationDatabase.findReservation(iSBN, copyNumber) != null) {
			if (reservationDatabase.findReservation(iSBN, copyNumber, u.getUserId()) != null) {
				reservationDatabase.deleteReservation(iSBN, copyNumber);
			} else {
				return ActionResult.RESERVATION_EXISTS;
			}
		}

		loanDatabase.addLoan(new Loan(u.getUserId(), iSBN, copyNumber, new Date()));
		return ActionResult.BORROWED;
	}

	/**
	 * Renews copy of book if copy, user and loan exists. Unless user has no
	 * privileges or a reservation on the book exists or the maximum number of
	 * renewals has been reached on this loan
	 * 
	 * @param username
	 * @param iSBN
	 * @param copyNumber
	 * @return
	 */
	public ActionResult renew(String username, int iSBN, int copyNumber) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return ActionResult.NO_SUCH_USER;
		}

		Book b = bookDatabase.findBook(iSBN);
		if (b == null) {
			return ActionResult.NO_SUCH_BOOK;
		} else if (b.getCopy(copyNumber) == null) {
			return ActionResult.NO_SUCH_COPY;
		} else if (loanDatabase.findLoan(iSBN, copyNumber, u.getUserId()) == null) {
			return ActionResult.NO_SUCH_LOAN;
		} else if (!u.hasPrivilege()) {
			return ActionResult.NO_PRIVILEGE;
		} else if (loanDatabase.findLoan(iSBN, copyNumber, u.getUserId()).getRenewed() >= Config.MAX_RENEW_ITEMS) {
			return ActionResult.MAX_RENEW;
		} else if (reservationDatabase.findReservation(iSBN, copyNumber) != null) {
			return ActionResult.RESERVATION_EXISTS;
		}

		Loan l = loanDatabase.findLoan(iSBN, copyNumber, u.getUserId());
		l.renew();
		l.updateDate(new Date());

		loanDatabase.saveChanges(l);
		return ActionResult.RENEWED;
	}

	/**
	 * Returns book if applicable
	 * 
	 * @param username
	 * @param iSBN
	 * @param copyNumber
	 * @return
	 */
	public ActionResult returnLoan(String username, int iSBN, int copyNumber) {
		return returnLoan(username, iSBN, copyNumber, new Date());
	}

	/**
	 * Returns book if user, copy and loan exists. If return is overdue, fees
	 * are applied, and if return past max overdue days users privileges are
	 * revoked
	 * 
	 * @param username
	 * @param iSBN
	 * @param copyNumber
	 * @param now
	 * @return
	 */
	public ActionResult returnLoan(String username, int iSBN, int copyNumber, Date now) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return ActionResult.NO_SUCH_USER;
		}

		Book b = bookDatabase.findBook(iSBN);
		if (b == null) {
			return ActionResult.NO_SUCH_BOOK;
		} else if (b.getCopy(copyNumber) == null) {
			return ActionResult.NO_SUCH_COPY;
		} else if (loanDatabase.findLoan(iSBN, copyNumber, u.getUserId()) == null) {
			return ActionResult.NO_SUCH_LOAN;
		}

		Date borrowed = loanDatabase.findLoan(iSBN, copyNumber, u.getUserId()).getDate();
		long diff = TimeUnit.DAYS.convert(now.getTime() - borrowed.getTime(), TimeUnit.MILLISECONDS);

		loanDatabase.deleteLoan(iSBN, copyNumber);

		if (diff > Config.RETURN_DAY_LIMIT) {
			u.addFee((int) (diff - Config.RETURN_DAY_LIMIT) * Config.OVERDUE_FEE);
			if (diff > Config.RETURN_DAY_LIMIT + Config.OVERDUE) {
				u.revokePrivilege();
				userDatabase.saveChanges(u);
				return ActionResult.PRIVILEGE_REVOKED;
			}
			userDatabase.saveChanges(u);
			return ActionResult.FEE_ADDED;
		}
		return ActionResult.RETURNED;
	}

	/**
	 * Revokes privileges of user
	 * 
	 * @param username
	 */
	public void revokePrivilege(String username) {
		User u = userDatabase.findUser(username);
		if (u == null) {
			return;
		}
		u.revokePrivilege();
		userDatabase.saveChanges(u);
	}

	/**
	 * Returns a string representation of a user
	 * 
	 * @param u
	 * @return
	 */
	public String userInfo(User u) {
		String user = u.toString() + "\n";
		user += "\tFees: " + u.getFees();

		user += "\n\tReservations:";
		List<Reservation> reservations = reservationDatabase.getUserReservations(u.getUserId());
		if (reservations.isEmpty()) {
			user += "\n\t\tUser has no reservations";
		} else {
			for (Reservation r : reservations) {
				user += "\n\t\t" + r.toString();
			}
		}

		user += "\n\tLoans:";
		List<Loan> loans = loanDatabase.getUserLoans(u.getUserId());
		if (loans.isEmpty()) {
			user += "\n\t\tUser has no loans";
		} else {
			for (Loan l : loans) {
				user += "\n\t\t" + l.toString();
			}
		}

		return user + "\n";
	}

	/**
	 * Returns a string representation of a book
	 * 
	 * @param b
	 * @return
	 */
	public String bookInfo(Book b) {
		String book = b.toString() + "\n";

		for (Copy c : b.getCopies()) {
			book += "\t" + c.toString();
			if (loanDatabase.findLoan(b.getISBN(), c.getCopyNumber()) != null) {
				book += "[LOANED] ";
			}
			if (reservationDatabase.findReservation(b.getISBN(), c.getCopyNumber()) != null) {
				book += "[RESERVED]";
			}
			book += "\n";
		}

		return book;
	}

}