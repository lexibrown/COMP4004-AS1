package com.comp4004.server;

import java.util.concurrent.ConcurrentHashMap;

import com.comp4004.communication.ThreadWithReactor;

public class Connection {
	
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
}
