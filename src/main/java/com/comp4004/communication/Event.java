package main.java.com.comp4004.communication;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Event {
    private final String type;
    private final EventSource source;
    private Map<String, Object> map;
    
    public Event(String type, EventSource source, Map<String, Object> map) {
        this.type = type;
        this.map = map;
        this.source = source;
    }

    public Event(String type, EventSource source) {
        this.type = type;
        this.map = new HashMap<String, Object>();
        this.source = source;
    }

	public void put(String key, Serializable value) {
        map.put(key, value);
    }
    
    public void put(String key, ThreadWithReactor twr) {
        map.put(key, twr);
    }

    public Object get(String key) {
        return map.get(key);
    }
    
    public boolean contains(String key){
    	return map.containsKey(key);
    }
    
    public String getType() {
    	return type;
    }
    
    public EventSource getSource() {
    	return source;
    }
    
}