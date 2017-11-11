package main.java.com.comp4004.communication;

public interface ReactorInterface {
    public void register(String type, EventHandler event);
    public void deregister(String type);
    public void dispatch(Event event) throws NoEventHandler;
}
