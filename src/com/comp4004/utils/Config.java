package com.comp4004.utils;

public class Config {
	public static final int MAX_CLIENTS = 5;
	public static final int DEFAULT_PORT = 5050;
	public static final String DEFAULT_HOST = "127.0.0.1";
	public static final int MAX_BORROWED_ITEMS = 3;
	// 1 minute for 1 day
	public static final int STIMULATED_DAY = 1 * 60 * 1000;
	public static final int OVERDUE = 5;
	public static final String CLERK_PASSWORD = "admin";

	public static final String DATABASE_USERS = System.getProperty("user.dir") + "/db/users.txt";
	public static final String DATABASE_LOANS = System.getProperty("user.dir") + "/db/loans.txt";
	public static final String DATABASE_BOOKS = System.getProperty("user.dir") + "/db/books.txt";

}
