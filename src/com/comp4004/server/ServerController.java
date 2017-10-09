package com.comp4004.server;

import java.io.IOException;

import com.comp4004.database.BookDatabase;
import com.comp4004.database.LoanDatabase;
import com.comp4004.database.UserDatabase;
import com.comp4004.model.Book;
import com.comp4004.model.User;
import com.comp4004.utils.Config;

public class ServerController {
	
	private Server server;

	private UserDatabase userDatabase;
	private LoanDatabase loanDatabase;
	private BookDatabase bookDatabase;
	
	public ServerController(Server s) {
		server = s;
		server.setController(this);
		userDatabase = new UserDatabase();
		loanDatabase = new LoanDatabase();
		bookDatabase = new BookDatabase();
	}

	public void start() throws IOException {
		userDatabase.loadUsers();
		loanDatabase.loadLoans();
		bookDatabase.loadBooks();
		server.start();
	}
	
	public void stop() {
		userDatabase = null;
		loanDatabase = null;
		bookDatabase = null;
		server.shutdown();
	}

	public boolean isAdmin(String username, String password) {
		return Config.CLERK_USERNAME.equals(username) && Config.CLERK_PASSWORD.equals(password);
	}
	
	public boolean confirmUser(String username, String password) {
		User u = userDatabase.findUser(username);
		if (u == null || !password.equals(u.getPassword())) {
			return false;
		}
		return true;
	}

	public void clearData() {
		// TODO Auto-generated method stub
		
	}

	public boolean createUser(String username, String password) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean removeUser(String username) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean searchUser(String username) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean addBook(int iSBN, String title) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean removeBook(int iSBN) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean removeBook(String title) {
		// TODO Auto-generated method stub
		return false;
	}

	public Book searchBook(int iSBN) {
		// TODO Auto-generated method stub
		return null;
	}

	public Book searchBook(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean addCopy(int iSBN) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean removeCopy(int iSBN, int i) {
		// TODO Auto-generated method stub
		return false;
	}

	public Object reserve(int iSBN, int copyNumber, String username) {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean removeReservation(int iSBN, int copyNumber) {
		// TODO Auto-generated method stub
		return false;
	}
	
	

}
