package com.comp4004.client;

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

public class Client {

	protected static final Logger log = LogManager.getLogger(Client.class);

	private String username;

	private Socket socket;
	protected Reactor clientReactor;
	private ThreadWithReactor twr;
	protected EventSource source;

	private ClientController controller;

	@SuppressWarnings("unused")
	private Client() {
		this(null);
	}

	public Client(ClientController controller) {
		this.controller = controller;
		clientReactor = new Reactor();
	}

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

	public void disconnnectFromServer() {
		if (twr.isRunning()) {
			twr.quit();
		}
		twr = null;
		clientReactor = null;
		socket = null;
		source = null;
	}

	public void setUp(EventSource source) {
		try {
			twr = new ThreadWithReactor(source, clientReactor);

			twr.register(MessageKey.CONNECT_PASS, new Connected());
			twr.register(MessageKey.CONNECT_FAIL, new ConnectFailed());

			twr.register(MessageKey.LOGOUT, new LoggedOut());

			twr.start();
			System.out.println("Connected!");
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

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

	private class Connected implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.loginResult(true, null, event.contains(MessageKey.ADMIN));
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

	private class ConnectFailed implements EventHandler {
		public void handleEvent(Event event) {
			try {
				controller.loginResult(false, event.get(MessageKey.FAIL_REASON).toString(), false);
			} catch (Exception e) {
				log.fatal("Something went wrong", e);
			}
		}
	}

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

	public void logout() {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.LOGOUT);
			message.put(MessageKey.USER, username);

			source.write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.fatal("Something went wrong", e);
		}
	}

}
