package com.comp4004.communication;

import java.io.IOException;

public interface EventSource {
    public Event getEvent() throws IOException, ClassNotFoundException, Exception;
	public LoggingInfo getLoggingInfo();
	public void write(String message) throws IOException;
	public void write(LoggingInfo info, String message) throws IOException;
	public void close();
}
