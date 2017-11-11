package main.java.com.comp4004.server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

import main.java.com.comp4004.communication.Event;
import main.java.com.comp4004.communication.EventHandler;
import main.java.com.comp4004.communication.EventSource;
import main.java.com.comp4004.communication.EventSourceImpl;
import main.java.com.comp4004.communication.LogManager;
import main.java.com.comp4004.communication.Reactor;
import main.java.com.comp4004.communication.ThreadWithReactor;
import main.java.com.comp4004.model.Book;
import main.java.com.comp4004.model.User;
import main.java.com.comp4004.server.tools.ActionResult;
import main.java.com.comp4004.utils.Config;
import main.java.com.comp4004.utils.JsonUtil;
import main.java.com.comp4004.utils.MessageKey;

public class Server implements Runnable {

	protected static final Logger log = LogManager.getInstance().getLogger(Server.class);

	private int port;
	private Connection connection;

	private ServerSocket listener;

	private Reactor serverReactor;
	private ThreadWithReactor reactor;

	private Thread thread = null;

	protected Boolean listening = false;

	private ServerController controller;

	public Server() {
		this(Config.DEFAULT_PORT);
	}

	public Server(int port) {
		this.port = port;
	}

	/**
	 * Set server controller
	 * 
	 * @param s
	 */
	public void setController(ServerController s) {
		this.controller = s;
	}

	/**
	 * Initialize components for client connections
	 */
	public void start() {
		listening = true;
		serverReactor = new Reactor();
		connection = new Connection();
		if (thread == null) {
			thread = new Thread(this);
		}
		thread.start();
	}

	/**
	 * Stop listening and exit program
	 */
	public void shutdown() {
		reactor.stopListening();
		listening = false;
		thread = null;
		System.exit(0);
	}

	/**
	 * Listen for clients
	 */
	public void run() {
		try {
			listener = new ServerSocket(port);
			listener.setReuseAddress(true);
			System.out.println("Server started up.\nListening...");
			while (listening) {
				Socket s = listener.accept();
				setUp(new EventSourceImpl(s));
			}
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Set up messages for reactor to listen for
	 * 
	 * @param impl
	 */
	public void setUp(EventSource impl) {
		try {
			reactor = new ThreadWithReactor(impl, serverReactor);

			reactor.register(MessageKey.LOGIN, new Login());
			reactor.register(MessageKey.LOGOUT, new Logout());

			reactor.register(MessageKey.SEARCH_USER, new SearchUser());
			reactor.register(MessageKey.ADD_USER, new AddUser());
			reactor.register(MessageKey.REMOVE_USER, new RemoveUser());

			reactor.register(MessageKey.ADD_BOOK, new AddBook());
			reactor.register(MessageKey.REMOVE_BOOK, new RemoveBook());

			reactor.register(MessageKey.ADD_COPY, new AddCopy());
			reactor.register(MessageKey.REMOVE_COPY, new RemoveCopy());

			reactor.register(MessageKey.COLLECT_FINE, new CollectFine());
			reactor.register(MessageKey.MONITOR_SYSTEM, new MonitorSystem());

			reactor.register(MessageKey.SEARCH_BOOK, new SearchBook());
			reactor.register(MessageKey.BORROW, new Borrow());
			reactor.register(MessageKey.MAKE_RESERVATION, new MakeReservation());
			reactor.register(MessageKey.REMOVE_RESERVATION, new RemoveReservation());
			reactor.register(MessageKey.RENEW_LOAN, new RenewLoan());
			reactor.register(MessageKey.RETURN_LOAN, new ReturnLoan());

			reactor.start();
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	/**
	 * Add client to connection unless maximum clients has been reached
	 * 
	 * @param client
	 * @param twr
	 * @return
	 */
	public String add(String client, ThreadWithReactor twr) {
		if (connection.getNumClients() >= Config.MAX_CLIENTS) {
			return "The maxiumum amount of clients have connected.";
		}
		connection.add(client, twr);
		return null;
	}

	/**
	 * Remove client by name
	 * 
	 * @param client
	 */
	public void remove(String client) {
		connection.remove(client);
	}

	/**
	 * Remove client by reactor
	 * 
	 * @param twr
	 */
	public void remove(ThreadWithReactor twr) {
		connection.remove(twr);
	}

	/**
	 * Login event handler
	 */
	private class Login implements EventHandler {
		public void handleEvent(Event event) {
			Map<String, Object> response = new HashMap<String, Object>();
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();

				String username = event.get(MessageKey.USERNAME).toString();
				String password = event.get(MessageKey.PASSWORD).toString();

				boolean admin = controller.isAdmin(username, password);
				boolean verified = controller.confirmUser(username, password);
				if (!admin && !verified) {
					// FAIL
					response.put(MessageKey.MESSAGE, MessageKey.CONNECT_FAIL);
					response.put(MessageKey.FAIL_REASON, "Username or password is unvalid.");
				} else {
					String addResult = add(event.get(MessageKey.USERNAME).toString(), twr);
					if (addResult == null) {
						// PASS
						response.put(MessageKey.MESSAGE, MessageKey.CONNECT_PASS);
						if (admin) {
							response.put(MessageKey.ADMIN, "");
						}
					} else {
						// FAIL
						response.put(MessageKey.MESSAGE, MessageKey.CONNECT_FAIL);
						response.put(MessageKey.FAIL_REASON, addResult);
					}
				}
				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Logout event handler
	 */
	private class Logout implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				if (event.contains(MessageKey.THREAD)) {
					remove((ThreadWithReactor) event.get(MessageKey.THREAD));
				} else if (event.contains(MessageKey.USERNAME)) {
					remove(event.get(MessageKey.USERNAME).toString());
				}

				Map<String, Object> response = new HashMap<String, Object>();
				response.put(MessageKey.MESSAGE, MessageKey.LOGOUT);
				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Search user event handler
	 */
	private class SearchUser implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else {
					User u = controller.searchUser(username);
					if (u != null) {
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, controller.userInfo(u));
					} else {
						response.put(MessageKey.MESSAGE, MessageKey.FAILED);
						response.put(MessageKey.FAIL_REASON, "User does not exist.");
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Add user event handler
	 */
	private class AddUser implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				String password = event.get(MessageKey.PASSWORD).toString();
				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else if (password == null || password.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No password provided.");
				} else {
					if (controller.createUser(username, password)) {
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, "Successfully added user: " + username);
					} else {
						response.put(MessageKey.MESSAGE, MessageKey.FAILED);
						response.put(MessageKey.FAIL_REASON, "Username is already in use.");
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Remove user event handler
	 */
	private class RemoveUser implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);

					ActionResult ar = controller.removeUser(username);
					switch (ar) {
					case NO_SUCH_USER:
						response.put(MessageKey.FAIL_REASON, "User does not exists.");
						break;
					case NO_PRIVILEGE:
						response.put(MessageKey.FAIL_REASON, "Users privileges are revoked. Cannot remove user.");
						break;
					case HAS_LOANS:
						response.put(MessageKey.FAIL_REASON, "User has active loans. Cannot remove user.");
						break;
					case REMOVED_USER:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, "Successfully removed user: " + username);
						break;
					default:
						break;
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Add book event handler
	 */
	private class AddBook implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				String title = event.get(MessageKey.TITLE).toString();

				if (title == null || title.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No title provided.");
				} else {
					if (controller.addBook(ISBN, title)) {
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, "Successfully added book: " + title + " [" + ISBN + "]");
					} else {
						response.put(MessageKey.MESSAGE, MessageKey.FAILED);
						response.put(MessageKey.FAIL_REASON, "Book already exists.");
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Remove book event handler
	 */
	private class RemoveBook implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				response.put(MessageKey.MESSAGE, MessageKey.FAILED);

				ActionResult ar = null;

				if (event.contains(MessageKey.ISBN)) {
					ar = controller.removeBook(Integer.valueOf(event.get(MessageKey.ISBN).toString()));
				} else if (event.contains(MessageKey.TITLE)) {
					String title = event.get(MessageKey.TITLE).toString();
					if (title == null || title.trim().isEmpty()) {
						response.put(MessageKey.FAIL_REASON, "No title provided.");
					} else {
						ar = controller.removeBook(title);
					}
				} else {
					response.put(MessageKey.FAIL_REASON, "No search parameters provided.");
				}

				if (ar != null) {
					switch (ar) {
					case NO_SUCH_BOOK:
						response.put(MessageKey.FAIL_REASON, "Book does not exist.");
						break;
					case LOAN_EXISTS:
						response.put(MessageKey.FAIL_REASON, "Book is currently loaned. Cannot remove book.");
						break;
					case RESERVATION_EXISTS:
						response.put(MessageKey.FAIL_REASON, "Book is being reserved. Cannot remove book.");
						break;
					case COPIES_EXIST:
						response.put(MessageKey.FAIL_REASON, "Book has existing copies. Cannout remove book.");
						break;
					case REMOVED_BOOK:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, "Successfully removed book.");
						break;
					default:
						break;
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Add copy event handler
	 */
	private class AddCopy implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());

				if (controller.addCopy(ISBN)) {
					response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
					response.put(MessageKey.REASON, "Successfully added copy to book " + ISBN);
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "Book does not exists.");
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Remove copy event handler
	 */
	private class RemoveCopy implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				int copyNumber = Integer.valueOf(event.get(MessageKey.COPYNUMBER).toString());

				response.put(MessageKey.MESSAGE, MessageKey.FAILED);

				ActionResult ar = controller.removeCopy(ISBN, copyNumber);

				switch (ar) {
				case NO_SUCH_BOOK:
					response.put(MessageKey.FAIL_REASON, "Book does not exist.");
					break;
				case NO_SUCH_COPY:
					response.put(MessageKey.FAIL_REASON, "Copy does not exist.");
					break;
				case LOAN_EXISTS:
					response.put(MessageKey.FAIL_REASON, "Book copy is currently loaned. Cannot remove book.");
					break;
				case RESERVATION_EXISTS:
					response.put(MessageKey.FAIL_REASON, "Book copy is being reserved. Cannot remove book.");
					break;
				case REMOVED_COPY:
					response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
					response.put(MessageKey.REASON, "Successfully removed copy " + copyNumber + " from book " + ISBN);
					break;
				default:
					break;
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Collect fine event handler
	 */
	private class CollectFine implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				int fee = Integer.valueOf(event.get(MessageKey.FEE).toString());

				if (fee <= 0) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "Invalid fee amount.");
				} else {
					if (controller.collectFee(username, fee)) {
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, "Successfully collected fee for user: " + username);
					} else {
						response.put(MessageKey.MESSAGE, MessageKey.FAILED);
						response.put(MessageKey.FAIL_REASON, "User does not exist.");
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Monitor system event handler
	 */
	private class MonitorSystem implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
				response.put(MessageKey.REASON, controller.monitorSystem());

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Search book event handler
	 */
	private class SearchBook implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				if (event.contains(MessageKey.ISBN)) {
					int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());

					Book b = controller.searchBook(ISBN);
					if (b != null) {
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, controller.bookInfo(b));
					} else {
						response.put(MessageKey.MESSAGE, MessageKey.FAILED);
						response.put(MessageKey.FAIL_REASON, "Book does not exist.");
					}
				} else if (event.contains(MessageKey.TITLE)) {
					String title = event.get(MessageKey.TITLE).toString();
					if (title == null || title.trim().isEmpty()) {
						response.put(MessageKey.MESSAGE, MessageKey.FAILED);
						response.put(MessageKey.FAIL_REASON, "No title provided.");
					} else {
						Book b = controller.searchBook(title);
						if (b != null) {
							response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
							response.put(MessageKey.REASON, controller.bookInfo(b));
						} else {
							response.put(MessageKey.MESSAGE, MessageKey.FAILED);
							response.put(MessageKey.FAIL_REASON, "Book does not exist.");
						}
					}
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No search parameters provided.");
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Borrow event handler
	 */
	private class Borrow implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				int copyNumber = Integer.valueOf(event.get(MessageKey.COPYNUMBER).toString());

				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);

					ActionResult ar = controller.borrow(username, ISBN, copyNumber);
					switch (ar) {
					case NO_SUCH_USER:
						response.put(MessageKey.FAIL_REASON, "User does not exists.");
						break;
					case NO_SUCH_BOOK:
						response.put(MessageKey.FAIL_REASON, "Book does not exists.");
						break;
					case NO_SUCH_COPY:
						response.put(MessageKey.FAIL_REASON, "Copy does not exists.");
						break;
					case NO_PRIVILEGE:
						response.put(MessageKey.FAIL_REASON, username + " is not allowed to borrow books.");
						break;
					case MAX_LOAN:
						response.put(MessageKey.FAIL_REASON, username + " has reached the max amount of active loans.");
						break;
					case RESERVATION_EXISTS:
						response.put(MessageKey.FAIL_REASON, "Book is already reserved.");
						break;
					case LOAN_EXISTS:
						response.put(MessageKey.FAIL_REASON, "Book is already loaned.");
						break;
					case BORROWED:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON,
								"Successfully borrowed copy " + copyNumber + " of book: " + ISBN);
						break;
					default:
						break;
					}
				}
				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Make reservation event handler
	 */
	private class MakeReservation implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				int copyNumber = Integer.valueOf(event.get(MessageKey.COPYNUMBER).toString());

				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);

					ActionResult ar = controller.reserve(ISBN, copyNumber, username);
					switch (ar) {
					case NO_SUCH_USER:
						response.put(MessageKey.FAIL_REASON, "User does not exists.");
						break;
					case NO_SUCH_BOOK:
						response.put(MessageKey.FAIL_REASON, "Book does not exists.");
						break;
					case NO_SUCH_COPY:
						response.put(MessageKey.FAIL_REASON, "Copy does not exists.");
						break;
					case RESERVATION_EXISTS:
						response.put(MessageKey.FAIL_REASON, "Book is already reserved.");
						break;
					case RESERVATION_MADE:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON,
								"Successfully reserved copy " + copyNumber + " of book: " + ISBN);
						break;
					default:
						break;
					}
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Remove reservation event handler
	 */
	private class RemoveReservation implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				int copyNumber = Integer.valueOf(event.get(MessageKey.COPYNUMBER).toString());

				if (controller.removeReservation(ISBN, copyNumber, username)) {
					response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
					response.put(MessageKey.REASON,
							"Successfully removed reservation of copy " + copyNumber + " of book " + ISBN);
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "You do not have this book reserved.");
				}

				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Renew loan event handler
	 */
	private class RenewLoan implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				int copyNumber = Integer.valueOf(event.get(MessageKey.COPYNUMBER).toString());

				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);

					ActionResult ar = controller.renew(username, ISBN, copyNumber);
					switch (ar) {
					case NO_SUCH_USER:
						response.put(MessageKey.FAIL_REASON, "User does not exists.");
						break;
					case NO_SUCH_BOOK:
						response.put(MessageKey.FAIL_REASON, "Book does not exists.");
						break;
					case NO_SUCH_COPY:
						response.put(MessageKey.FAIL_REASON, "Copy does not exists.");
						break;
					case NO_PRIVILEGE:
						response.put(MessageKey.FAIL_REASON, username + " is not allowed to renew books.");
						break;
					case NO_SUCH_LOAN:
						response.put(MessageKey.FAIL_REASON, "Loan does not exists.");
						break;
					case MAX_RENEW:
						response.put(MessageKey.FAIL_REASON,
								"The max amount of renews for this book has been reached.");
						break;
					case RESERVATION_EXISTS:
						response.put(MessageKey.FAIL_REASON, "Book is reserved.");
						break;
					case RENEWED:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON,
								"Successfully renewed loan of copy " + copyNumber + " of book: " + ISBN);
						break;
					default:
						break;
					}
				}
				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	/**
	 * Return loan event handler
	 */
	private class ReturnLoan implements EventHandler {
		public void handleEvent(Event event) {
			try {
				ThreadWithReactor twr = (ThreadWithReactor) Thread.currentThread();
				Map<String, Object> response = new HashMap<String, Object>();

				String username = event.get(MessageKey.USERNAME).toString();
				int ISBN = Integer.valueOf(event.get(MessageKey.ISBN).toString());
				int copyNumber = Integer.valueOf(event.get(MessageKey.COPYNUMBER).toString());

				if (username == null || username.trim().isEmpty()) {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);
					response.put(MessageKey.FAIL_REASON, "No username provided.");
				} else {
					response.put(MessageKey.MESSAGE, MessageKey.FAILED);

					ActionResult ar = controller.returnLoan(username, ISBN, copyNumber);
					switch (ar) {
					case NO_SUCH_USER:
						response.put(MessageKey.FAIL_REASON, "User does not exists.");
						break;
					case NO_SUCH_BOOK:
						response.put(MessageKey.FAIL_REASON, "Book does not exists.");
						break;
					case NO_SUCH_COPY:
						response.put(MessageKey.FAIL_REASON, "Copy does not exists.");
						break;
					case NO_SUCH_LOAN:
						response.put(MessageKey.FAIL_REASON, "Loan does not exists.");
						break;
					case FEE_ADDED:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON, "Successfully returned copy " + copyNumber + " of book: " + ISBN
								+ "but fee was applied because return was late.");
						break;
					case PRIVILEGE_REVOKED:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON,
								"Successfully returned copy " + copyNumber + " of book: " + ISBN
										+ "but book has been overdue for more than " + Config.OVERDUE
										+ " days. User privileges have been revoked.");
						break;
					case RETURNED:
						response.put(MessageKey.MESSAGE, MessageKey.SUCCESS);
						response.put(MessageKey.REASON,
								"Successfully returned copy " + copyNumber + " of book: " + ISBN);
						break;
					default:
						break;
					}
				}
				event.getSource().write(twr.getEventSource().getLoggingInfo(), JsonUtil.stringify(response));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	public static void main(String[] args) {
		ServerController c = new ServerController(new Server(Config.DEFAULT_PORT));
		try {
			c.start();
		} catch (IOException ioe) {
			log.fatal("Failed to start server", ioe);
		}
	}
}
