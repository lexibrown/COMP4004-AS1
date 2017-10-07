package com.comp4004.communication;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.Writer;

import org.apache.log4j.Logger;

public class BufferedLoggingWriter extends BufferedWriter {

	private static final Logger log = Logger.getLogger(BufferedLoggingWriter.class);

	public BufferedLoggingWriter(Writer out) {
		super(out);
	}
	
	public void write(String message) throws IOException {
		log.info("SENT: " + message);
		super.write(message);
	}
	
	public void write(LoggingInfo info, String message) throws IOException {
		log.info(info.logTo() + " SENT: " + message);
		super.write(message);
	}
	
}
