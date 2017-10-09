package com.comp4004.server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.comp4004.communication.Event;
import com.comp4004.communication.EventHandler;
import com.comp4004.communication.EventSource;
import com.comp4004.communication.EventSourceImpl;
import com.comp4004.communication.Reactor;
import com.comp4004.communication.ThreadWithReactor;
import com.comp4004.utils.Config;
import com.comp4004.utils.JsonUtil;
import com.comp4004.utils.MessageKey;

public class Server implements Runnable {

	protected static final Logger log = LogManager.getLogger(Server.class);

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

	public void setController(ServerController s) {
		this.controller = s;
	}

	public void start() {
		listening = true;
		serverReactor = new Reactor();
		connection = new Connection();
		if (thread == null) {
			thread = new Thread(this);
		}
		thread.start();
	}

	public void shutdown() {
		reactor.stopListening();
		listening = false;
		thread = null;
		System.exit(0);
	}

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

	public void setUp(EventSource impl) {
		try {
			reactor = new ThreadWithReactor(impl, serverReactor);

			reactor.register(MessageKey.LOGIN, new Login());
			reactor.register(MessageKey.LOGOUT, new Logout());
			
			reactor.register(MessageKey.ADD_USER, new AddUser());
//			reactor.register(MessageKey.REMOVE_USER, new RemoveUser());
//
//			reactor.register(MessageKey.ADD_BOOK, new AddBook());
//			reactor.register(MessageKey.REMOVE_BOOK, new RemoveBook());
//
//			reactor.register(MessageKey.ADD_COPY, new AddCopy());
//			reactor.register(MessageKey.REMOVE_COPY, new RemoveCopy());
//
//			reactor.register(MessageKey.COLLECT_FINE, new CollectFine());
//			reactor.register(MessageKey.MONITOR_SYSTEM, new MonitorSystem());
//
//			reactor.register(MessageKey.SEARCH_BOOK, new SearchBook());
//			reactor.register(MessageKey.BORROW, new Borrow());
//			reactor.register(MessageKey.MAKE_RESERVATION, new MakeReservation());
//			reactor.register(MessageKey.REMOVE_RESERVATION, new RemoveReservation());
//			reactor.register(MessageKey.RENEW_LOAN, new RenewLoan());
//			reactor.register(MessageKey.RETURN_LOAN, new ReturnLoan());
			
			reactor.start();
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

	public String add(String client, ThreadWithReactor twr) {
		if (connection.getNumClients() >= Config.MAX_CLIENTS) {
			return "The maxiumum amount of clients have connected.";
		}
		connection.add(client, twr);
		return null;
	}

	public void remove(String client) {
		connection.remove(client);
	}

	public void remove(ThreadWithReactor twr) {
		connection.remove(twr);
	}

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

	public static void main(String[] args) {
		ServerController c = new ServerController(new Server(Config.DEFAULT_PORT));
		try {
			c.start();
		} catch (IOException ioe) {
			log.fatal("Failed to start server", ioe);
		}
	}
}
