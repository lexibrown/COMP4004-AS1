package com.comp4004.server;

import java.io.IOException;

import com.comp4004.database.BookDatabase;
import com.comp4004.database.LoanDatabase;
import com.comp4004.database.UserDatabase;
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

}
