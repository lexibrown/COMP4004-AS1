package main.java.com.comp4004.communication;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.json.JSONException;

import main.java.com.comp4004.utils.MessageKey;

public class ThreadWithReactor extends Thread implements ReactorInterface {

	private static final Logger log = LogManager.getInstance().getLogger(ThreadWithReactor.class);

	private boolean running;
	private EventSource source;
	private Reactor reactor;

	public ThreadWithReactor(EventSource source) {
		this.source = source;
		this.running = false;
		this.reactor = new Reactor();
	}

	public ThreadWithReactor(EventSource source, Reactor reactor) {
		this.source = source;
		this.running = false;
		this.reactor = reactor;
	}

	public void stopListening() {
		running = false;
		System.exit(0);
	}
	
	public void quit() {
		running = false;
		try {
			Event e = new Event(MessageKey.LOGOUT, source);
			e.put(MessageKey.THREAD, this);
			dispatch(e);
		} catch (NoEventHandler e) {
			log.fatal("Received an event that can't be handled.", e);
		}
	}

	public boolean isRunning() {
		return running;
	}

	public void run() {
		running = source != null;
		while (running) {
			Event event;
			try {
				event = source.getEvent();
				if (event != null) {
					try {
						dispatch(event);
					} catch (NoEventHandler e) {
						running = false;
						log.fatal("Received an event that can't be handled.", e);
					}
				} else {
					quit();
				}
			} catch (JSONException je) {
				log.fatal("JSONException, closing connection.", je);
				quit();
			} catch (ClassNotFoundException cne) {
				log.fatal("ClassNotException, closing connection.", cne);
				quit();
			} catch (IOException ioe) {
				log.fatal("IOException, closing connection.", ioe);
				quit();
			} catch (Exception e) {
				log.fatal("Exception, closing connection.", e);
				quit();
			}
		}
	}

	public void register(String type, EventHandler event) {
		reactor.register(type, event);
	}

	public void deregister(String type) {
		reactor.deregister(type);
	}

	public void dispatch(Event event) throws NoEventHandler {
		reactor.dispatch(event);
	}

	public EventSource getEventSource() {
		return source;
	}
}
