package com.comp4004.server;

import java.util.concurrent.ConcurrentHashMap;

import com.comp4004.communication.ThreadWithReactor;

public class Connection {

	// connected clients
	private ConcurrentHashMap<String, ThreadWithReactor> clients;

	public Connection() {
		clients = new ConcurrentHashMap<String, ThreadWithReactor>();
	}

	/**
	 * Return number of connected clients
	 * 
	 * @return
	 */
	public synchronized int getNumClients() {
		return clients.size();
	}

	/**
	 * Return hash map of clients
	 * 
	 * @return
	 */
	public synchronized ConcurrentHashMap<String, ThreadWithReactor> getClients() {
		return clients;
	}

	/**
	 * Add client to list
	 * 
	 * @param client
	 * @param twr
	 */
	public synchronized void add(String client, ThreadWithReactor twr) {
		clients.put(client, twr);
	}

	/**
	 * Remove client from list
	 * 
	 * @param client
	 */
	public synchronized void remove(String client) {
		clients.remove(client);
	}

	/**
	 * Find client by reactor and remove it from list
	 * 
	 * @param twr
	 */
	public synchronized void remove(ThreadWithReactor twr) {
		for (String key : clients.keySet()) {
			if (clients.get(key).equals(twr)) {
				clients.remove(key);
				return;
			}
		}
	}

	/**
	 * Return client reactor
	 * 
	 * @param name
	 * @return
	 */
	public synchronized ThreadWithReactor getClient(String name) {
		for (String user : clients.keySet()) {
			if (name.equals(user)) {
				return clients.get(name);
			}
		}
		return null;
	}

	/**
	 * Return client name
	 * 
	 * @param twr
	 * @return
	 */
	public String getClient(ThreadWithReactor twr) {
		for (String user : clients.keySet()) {
			if (clients.get(user).equals(twr)) {
				return user;
			}
		}
		return null;
	}
}
