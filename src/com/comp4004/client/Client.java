package com.comp4004.client;

import java.net.Socket;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

import com.comp4004.communication.Event;
import com.comp4004.communication.EventHandler;
import com.comp4004.communication.EventSource;
import com.comp4004.communication.EventSourceImpl;
import com.comp4004.communication.LogManager;
import com.comp4004.communication.Reactor;
import com.comp4004.communication.ThreadWithReactor;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;
import com.comp4004.utils.MessageKey;

public class Client {

	protected static final Logger log = LogManager.getInstance().getLogger(Client.class);

	private String username; // clients username

	private Socket socket;
	protected Reactor clientReactor;
	private ThreadWithReactor twr;
	protected EventSource source;

	private ClientController controller; // client controller

	@SuppressWarnings("unused")
	private Client() {
		this(null);
	}

	public Client(ClientController controller) {
		this.controller = controller;
		clientReactor = new Reactor();
	}

	/**
	 * Return the clients username
	 * 
	 * @return client username
	 */
	public String getUsername() {
		return this.username;
	}

	/**
	 * Returns the client socket
	 * 
	 * @return
	 */
	public Socket getSocket() {
		return this.socket;
	}

	/**
	 * Connects to the library server
	 */
	public void connectToServer() {
		System.out.println("Connecting to Server...");
		try {
			final Socket s = new Socket(Config.DEFAULT_HOST, Config.DEFAULT_PORT);

			source = new EventSourceImpl(s);
			socket = s;

			setUp(source);
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
			controller.disconnected();
		}
	}

	/**
	 * Disconnects for the library server and stops all working threads and
	 * listeners
	 */
	public void disconnnectFromServer() {
		if (twr.isRunning()) {
			twr.quit();
		}
		twr = null;
		clientReactor = null;
		socket = null;
		source = null;
	}

	/**
	 * Sets up valid messages to listen for
	 * 
	 * @param source
	 */
	public void setUp(EventSource source) {
		try {
			twr = new ThreadWithReactor(source, clientReactor);

			twr.register(MessageKey.CONNECT_PASS, new Connected());
			twr.register(MessageKey.CONNECT_FAIL, new ConnectFailed());

			twr.register(MessageKey.SUCCESS, new SuccessResponse());
			twr.register(MessageKey.FAILED, new FailedResponse());

			twr.register(MessageKey.LOGOUT, new LoggedOut());

			twr.start();
			System.out.println("Connected!");
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Handles logic when server logs client out
	 */
	private class LoggedOut implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.loggedout();
				twr.stopListening();
				disconnnectFromServer();
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Informs the controller of a successful login and whether the user is an
	 * admin
	 */
	private class Connected implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.loginResult(true, null, event.contains(MessageKey.ADMIN));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Informs the controller of an unsuccessful login and provides reason
	 */
	private class ConnectFailed implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.loginResult(false, event.get(MessageKey.FAIL_REASON).toString(), false);
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Handles positive responses
	 */
	private class SuccessResponse implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.success(event.get(MessageKey.REASON).toString());
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Handles negative responses
	 */
	private class FailedResponse implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.success(event.get(MessageKey.FAIL_REASON).toString());
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Sends login request with username and password
	 * 
	 * @param username
	 * @param password
	 */
	public void login(String username, String password) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.LOGIN);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.PASSWORD, password);

			source.write(JsonUtil.stringify(message));
			this.username = username;
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends logout request
	 */
	public void logout() {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.LOGOUT);
			message.put(MessageKey.USERNAME, username);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends search user request
	 * 
	 * @param username
	 */
	public void searchUser(String username) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.SEARCH_USER);
			message.put(MessageKey.USERNAME, username);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Send create user request with all required information
	 * 
	 * @param username
	 * @param password
	 */
	public void createUser(String username, String password) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.ADD_USER);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.PASSWORD, password);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends remove user request with username of user to remove
	 * 
	 * @param username
	 */
	public void removeUser(String username) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.REMOVE_USER);
			message.put(MessageKey.USERNAME, username);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends add book request with all required information
	 * 
	 * @param ISBN
	 * @param title
	 */
	public void addBook(int ISBN, String title) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.ADD_BOOK);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.TITLE, title);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends remove book by title request
	 * 
	 * @param title
	 */
	public void removeBook(String title) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.REMOVE_BOOK);
			message.put(MessageKey.TITLE, title);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends remove book by ISBN request
	 * 
	 * @param ISBN
	 */
	public void removeBook(int ISBN) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.REMOVE_BOOK);
			message.put(MessageKey.ISBN, ISBN);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends add book copy request
	 * 
	 * @param ISBN
	 */
	public void addCopy(int ISBN) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.ADD_COPY);
			message.put(MessageKey.ISBN, ISBN);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends remove book copy request
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void removeCopy(int ISBN, int copyNumber) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.REMOVE_COPY);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.COPYNUMBER, copyNumber);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends search book by ISBN request
	 * 
	 * @param ISBN
	 */
	public void searchBook(int ISBN) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.SEARCH_BOOK);
			message.put(MessageKey.ISBN, ISBN);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends search book by title request
	 * 
	 * @param title
	 */
	public void searchBook(String title) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.SEARCH_BOOK);
			message.put(MessageKey.TITLE, title);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends borrow book request
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void borrow(int ISBN, int copyNumber) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.BORROW);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.COPYNUMBER, copyNumber);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends makes reservation request
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void makeReservation(int ISBN, int copyNumber) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.MAKE_RESERVATION);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.COPYNUMBER, copyNumber);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends remove reservation request
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void removeReservation(int ISBN, int copyNumber) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.REMOVE_RESERVATION);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.COPYNUMBER, copyNumber);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends renew loan request
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void renewLoan(int ISBN, int copyNumber) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.RENEW_LOAN);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.COPYNUMBER, copyNumber);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends return loan request
	 * 
	 * @param ISBN
	 * @param copyNumber
	 */
	public void returnLoan(int ISBN, int copyNumber) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.RETURN_LOAN);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.ISBN, ISBN);
			message.put(MessageKey.COPYNUMBER, copyNumber);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends request for all library information
	 */
	public void monitorSystem() {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.MONITOR_SYSTEM);
			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Sends request to update user fees
	 * 
	 * @param username
	 * @param fee
	 */
	public void collectFine(String username, int fee) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.COLLECT_FINE);
			message.put(MessageKey.USERNAME, username);
			message.put(MessageKey.FEE, fee);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

}
