package com.comp4004.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.NoSuchElementException;

public class ClientController {

	private Client client;
	private BufferedReader c = new BufferedReader(new InputStreamReader(System.in));

	private boolean admin = false;
	private boolean paused = false;
	private Thread thread;

	public ClientController() {
		this.client = new Client(this);
		client.connectToServer();
	}

	public void setClient(Client c) {
		this.client = c;
	}

	/**
	 * Display disconnect message and exit program
	 */
	public void disconnected() {
		System.out.println("Disconnected from the server. Shuting down.");
		System.exit(0);
	}

	/**
	 * Display logout message and exit program
	 */
	public void loggedout() {
		System.out.println("Successfully logged out.");
		System.out.println("Shutting down.");
		System.exit(0);
	}

	/**
	 * Display login results. Go to menu if login is successful
	 * 
	 * @param result
	 * @param message
	 * @param admin
	 */
	public void loginResult(boolean result, String message, boolean admin) {
		if (result) {
			this.admin = admin;
			System.out.println("Successfully logged  in.");
			listen();
		} else {
			System.out.println(message);
			start();
		}
	}

	/**
	 * Display success message
	 * 
	 * @param message
	 */
	public void success(String message) {
		System.out.println(message);
		listen();
	}

	/**
	 * Display fail message
	 * 
	 * @param message
	 */
	public void failed(String message) {
		System.err.println(message);
		listen();
	}

	/**
	 * Ask for clients username and password to login
	 */
	public void start() {
		System.out.println();
		System.out.println("Welcome to Library Terminal. Please enter your username and password.");

		String username = "";
		String password = "";

		try {
			System.out.println();
			System.out.print("Enter your username: ");
			username = c.readLine();

			System.out.println();
			System.out.print("Enter your password: ");
			password = c.readLine();

			client.login(username, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Listen for main menu input
	 */
	public void listen() {
		thread = new Thread(new Runnable() {
			public void run() {
				while (true) {
					try {
						if (paused) {
							continue;
						}

						System.out.println();
						System.out.println();
						System.out.println("=====Main Menu==== (Type in the command you'd like to perform)");
						System.out.println();

						System.out.println("User Info");
						System.out.println("Search Book");
						System.out.println("Borrow");
						System.out.println("Make Reservation");
						System.out.println("Remove Reservation");
						System.out.println("Renew Loan");
						System.out.println("Return Loan");
						System.out.println("Logout");

						if (admin) {
							System.out.println();
							System.out.println("=====Admin Tools=====");
							System.out.println("Search User");
							System.out.println("Create User");
							System.out.println("Remove User");
							System.out.println("Add Book");
							System.out.println("Delete Book");
							System.out.println("Add Copy");
							System.out.println("Delete Copy");
							System.out.println("Collect Fine");
							System.out.println("Monitor System");
						}
						System.out.println();

						System.out.print("> ");
						String answer = c.readLine();

						if (admin) {
							if ("SEARCH USER".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter username: ");
								String username = c.readLine();

								client.searchUser(username);
								return;
							} else if ("CREATE USER".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter username: ");
								String username = c.readLine();

								System.out.println();
								System.out.print("Enter users password: ");
								String password = c.readLine();

								client.createUser(username, password);
								return;
							} else if ("REMOVE USER".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter username: ");
								String username = c.readLine();

								client.removeUser(username);
								return;
							} else if ("ADD BOOK".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter ISBN: ");
								int ISBN = Integer.parseInt(c.readLine());

								System.out.println();
								System.out.print("Enter title: ");
								String title = c.readLine();

								client.addBook(ISBN, title);
								return;
							} else if ("DELETE BOOK".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter ISBN or Title: ");
								String content = c.readLine();

								try {
									client.removeBook(Integer.parseInt(content));
								} catch (NumberFormatException e) {
									client.removeBook(content);
								}
								return;
							} else if ("ADD COPY".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter ISBN: ");
								int ISBN = Integer.parseInt(c.readLine());

								client.addCopy(ISBN);
								return;
							} else if ("DELETE COPY".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter ISBN: ");
								int ISBN = Integer.parseInt(c.readLine());

								System.out.println();
								System.out.print("Enter copy number: ");
								int copyNumber = Integer.parseInt(c.readLine());

								client.removeCopy(ISBN, copyNumber);
								return;
							} else if ("COLLECT FINE".equalsIgnoreCase(answer)) {
								System.out.println();
								System.out.print("Enter username: ");
								String username = c.readLine();

								System.out.println();
								System.out.print("Enter amount to pay: ");
								int fee = Integer.parseInt(c.readLine());

								client.collectFine(username, fee);
								return;
							} else if ("MONITOR SYSTEM".equalsIgnoreCase(answer)) {
								client.monitorSystem();
								return;
							}
						}

						if ("USER INFO".equalsIgnoreCase(answer)) {
							client.searchUser(client.getUsername());
							return;
						} else if ("SEARCH BOOK".equalsIgnoreCase(answer)) {
							System.out.println();
							System.out.print("Enter ISBN or Title: ");
							String content = c.readLine();

							try {
								client.searchBook(Integer.parseInt(content));
							} catch (NumberFormatException e) {
								client.searchBook(content);
							}
							return;
						} else if ("BORROW".equalsIgnoreCase(answer)) {
							System.out.println();
							System.out.print("Enter ISBN: ");
							int ISBN = Integer.parseInt(c.readLine());

							System.out.println();
							System.out.print("Enter copy number: ");
							int copyNumber = Integer.parseInt(c.readLine());

							client.borrow(ISBN, copyNumber);
							return;
						} else if ("MAKE RESERVATION".equalsIgnoreCase(answer)) {
							System.out.println();
							System.out.print("Enter ISBN: ");
							int ISBN = Integer.parseInt(c.readLine());

							System.out.println();
							System.out.print("Enter copy number: ");
							int copyNumber = Integer.parseInt(c.readLine());

							client.makeReservation(ISBN, copyNumber);
							return;
						} else if ("REMOVE RESERVATION".equalsIgnoreCase(answer)) {
							System.out.println();
							System.out.print("Enter ISBN: ");
							int ISBN = Integer.parseInt(c.readLine());

							System.out.println();
							System.out.print("Enter copy number: ");
							int copyNumber = Integer.parseInt(c.readLine());

							client.removeReservation(ISBN, copyNumber);
							return;
						} else if ("RENEW LOAN".equalsIgnoreCase(answer)) {
							System.out.println();
							System.out.print("Enter ISBN: ");
							int ISBN = Integer.parseInt(c.readLine());

							System.out.println();
							System.out.print("Enter copy number: ");
							int copyNumber = Integer.parseInt(c.readLine());

							client.renewLoan(ISBN, copyNumber);
							return;
						} else if ("RETURN LOAN".equalsIgnoreCase(answer)) {
							System.out.println();
							System.out.print("Enter ISBN: ");
							int ISBN = Integer.parseInt(c.readLine());

							System.out.println();
							System.out.print("Enter copy number: ");
							int copyNumber = Integer.parseInt(c.readLine());

							client.returnLoan(ISBN, copyNumber);
							return;
						} else if ("LOGOUT".equalsIgnoreCase(answer)) {
							client.logout();
							return;
						} else {
							System.out.println("Unknown command.");
						}
					} catch (NoSuchElementException e) {
						System.out.println("Connection ended unexpectedly.");
						break;
					} catch (IOException e) {
						System.out.println("Unable to read input.");
						e.printStackTrace();
					}
				}
				try {
					c.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		});
		thread.start();
	}

}
