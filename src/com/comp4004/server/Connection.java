package com.comp4004.server;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.log4j.Logger;

import com.comp4004.communication.ThreadWithReactor;
import com.comp4004.utils.JsonUtil;
import com.comp4004.utils.MessageKey;

public class Connection {

	private static final Logger log = Logger.getLogger(Connection.class);
	
	private ConcurrentHashMap<String, ThreadWithReactor> clients;

	public Connection() {
		clients = new ConcurrentHashMap<String, ThreadWithReactor>();
	}

	public synchronized int getNumClients() {
		return clients.size();
	}

	public synchronized ConcurrentHashMap<String, ThreadWithReactor> getClients() {
		return clients;
	}
	
	public synchronized void add(String client, ThreadWithReactor twr) {
		clients.put(client, twr);
	}

	public synchronized void remove(String client) {
		clients.remove(client);
	}

	public synchronized void remove(ThreadWithReactor twr) {
		for (String key : clients.keySet()) {
			if (clients.get(key).equals(twr)) {
				clients.remove(key);
				return;
			}
		}
	}
		
	public synchronized ThreadWithReactor getClient(String name) {
		for (String user : clients.keySet()) {
			if (name.equals(user)) {
				return clients.get(name);
			}
		}
		return null;
	}

	public String getClient(ThreadWithReactor twr) {
		for (String user : clients.keySet()) {
			if (clients.get(user).equals(twr)) {
				return user;
			}
		}
		return null;
	}

	public void sendMessage(String client, String content) {
		try {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put(MessageKey.MESSAGE, MessageKey.MESSAGE);

			clients.get(client).getEventSource().write(JsonUtil.stringify(message));
		} catch (Exception e) {
			log.error("Something bad happened", e);
		}
	}

}
