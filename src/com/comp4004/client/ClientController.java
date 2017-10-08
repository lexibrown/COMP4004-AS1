package com.comp4004.client;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class ClientController {

	private Client client;
	private Scanner sc = new Scanner(System.in);

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

	public void disconnected() {
		System.out.println("Disconnected from the server. Shuting down.");
		System.exit(0);
	}

	public void loggedout() {
		System.out.println("Successfully logged out.");
		start();
	}

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

	public void start() {
		System.out.println();
		System.out.println("Welcome to Library Terminal. Please enter your username and password.");

		String username = "";
		String password = "";
		BufferedReader c = new BufferedReader(new InputStreamReader(System.in));
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

	public void listen() {
		thread = new Thread(new Runnable() {
			public void run() {
				do {
					try {
						if (paused) {
							continue;
						}

						System.out.println();
						System.out.println();
						System.out.println("=====Main Menu====");
						System.out.println("Type in the command you'd like to preform");
						System.out.println();

						System.out.println("Search Book");
						System.out.println("Borrow");
						System.out.println("Make Reservation");
						System.out.println("Renew Loan");
						System.out.println("Return Loan");

						if (admin) {
							System.out.println();
							System.out.println("=====Admin Tools=====");
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

						String answer = sc.nextLine();

						if (admin) {
							if ("CREATE USER".equals(answer)) {
								
							} else if ("REMOVE USER".equalsIgnoreCase(answer)) {
								
							} else if ("ADD BOOK".equalsIgnoreCase(answer)) {
								
							} else if ("DELETE BOOK".equalsIgnoreCase(answer)) {
								
							} else if ("ADD COPY".equalsIgnoreCase(answer)) {
								
							} else if ("DELETE COPY".equalsIgnoreCase(answer)) {
								
							} else if ("COLLECT FINE".equalsIgnoreCase(answer)) {
								
							} else if ("MONITOR SYSTEM".equalsIgnoreCase(answer)) {

							}
						}
						
						if ("SEARCH BOOK".equalsIgnoreCase(answer)) {
							
						} else if ("BORROW".equalsIgnoreCase(answer)) {
							
						} else if ("MAKE RESERVATION".equalsIgnoreCase(answer)) {
							
						} else if ("RENEW LOAN".equalsIgnoreCase(answer)) {
							
						} else if ("RETURN LOAN".equalsIgnoreCase(answer)) {
						
						} else if ("LOGOUT".equalsIgnoreCase(answer)) {
							client.logout();
						} else {
							System.out.println("Unknown command.");
						}
					} catch (NoSuchElementException e) {
						System.out.println("Connection ended unexpectedly. ");
						break;
					}
				} while (sc.hasNext());
				sc.close();
			}
		});
		thread.start();
	}
}
