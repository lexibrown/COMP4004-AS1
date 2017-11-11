package main.java.com.comp4004.communication;

import java.util.HashMap;
import java.util.Map;

public class Reactor implements ReactorInterface {

	private Map<String, EventHandler> map;

	public Reactor() {
		map = new HashMap<String, EventHandler>();
	}

	public synchronized void register(String key, EventHandler handler) {
		map.put(key, handler);
	}

	public synchronized void deregister(String key) {
		map.remove(key);
	}

	public void dispatch(Event event) throws NoEventHandler {
		EventHandler handler = map.get(event.getType());
		if (handler != null) {
			handler.handleEvent(event);
		} else {
			throw new NoEventHandler(event.getType());
		}
	}
}
