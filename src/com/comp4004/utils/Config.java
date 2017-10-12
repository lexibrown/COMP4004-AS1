package com.comp4004.utils;

public class Config {
	// the default port
	public static final int DEFAULT_PORT = 5050;
	// the default host ip
	public static final String DEFAULT_HOST = "127.0.0.1";

	// maximum amount of clients allowed to be logged in
	public static final int MAX_CLIENTS = 5;
	// maximum amount of books that can be borrowed at a time
	public static final int MAX_BORROWED_ITEMS = 10;
	// maximum amount of times a book can be renewed
	public static final int MAX_RENEW_ITEMS = 2;

	// 1 minute for 1 day
	public static final int STIMULATED_DAY = 1 * 60 * 1000;
	// max days until book is overdue
	public static final int RETURN_DAY_LIMIT = 5;
	// max days book can be overdue until privileges are revoked
	public static final int OVERDUE = 3;
	// over due fee in dollars
	public static final int OVERDUE_FEE = 1;

	// clerk username
	public static final String CLERK_USERNAME = "clerk";
	// clerk password
	public static final String CLERK_PASSWORD = "admin";

	// database file locations
	public static final String DATABASE_USERS = System.getProperty("user.dir") + "/db/users.txt";
	public static final String DATABASE_LOANS = System.getProperty("user.dir") + "/db/loans.txt";
	public static final String DATABASE_BOOKS = System.getProperty("user.dir") + "/db/books.txt";
	public static final String DATABASE_RESERVE = System.getProperty("user.dir") + "/db/reserve.txt";

}
