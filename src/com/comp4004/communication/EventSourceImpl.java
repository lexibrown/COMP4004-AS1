package com.comp4004.communication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.comp4004.utils.JsonUtil;
import com.comp4004.utils.MessageKey;

public class EventSourceImpl implements EventSource {

	private static final Logger log = LogManager.getLogger(EventSourceImpl.class);
	
    private Socket socket;
    private LoggingInfo info;

    private OutputStreamWriter osw;
    private InputStreamReader isw;
    private BufferedReader reader;
    private BufferedLoggingWriter writer;

    public EventSourceImpl(BufferedReader reader, BufferedLoggingWriter writer) throws IOException {
        this.reader = reader;
        this.writer = writer;
    }

    /*
     * Allows streams to be created: input followed by output
     */
    public EventSourceImpl(InputStream is, OutputStream os) throws IOException {
        osw = new OutputStreamWriter(os);
        writer = new BufferedLoggingWriter(osw);

        isw = new InputStreamReader(is);
        reader = new BufferedReader(isw);
    }

    /*
     * Allows streams to be created: output followed by input
     */
    public EventSourceImpl(OutputStream os, InputStream is) throws IOException {
        osw = new OutputStreamWriter(os);
        writer = new BufferedLoggingWriter(osw);

        isw = new InputStreamReader(is);
        reader = new BufferedReader(isw);
    }

    /*
     * Designed for server-side usage when a socket has been accepted
     */
    public EventSourceImpl(Socket s) throws IOException {
        this(s.getInputStream(), s.getOutputStream());
        this.socket = s;
        this.info = new LoggingInfo(s);
    }

	@SuppressWarnings("unchecked")
	public Event getEvent() throws IOException, ClassNotFoundException, Exception {
        String line = reader.readLine();
        Map<String, Object> msg;
        if (line == null) {
        	msg = new HashMap<String, Object>();
        } else {
            log(line);
        	msg = JsonUtil.parse(line, HashMap.class);
        }
        
        if (msg.containsKey(MessageKey.MESSAGE)) {
    		return new Event(msg.get(MessageKey.MESSAGE).toString(), this, msg);
        }
        return new Event("", this, msg);
    }
    
	public void write(String message) throws IOException {
		writer.write(getLoggingInfo(), message);
		writer.newLine();
		writer.flush();
	}
    
	public void write(LoggingInfo info, String message) throws IOException {
		writer.write(info, message);
		writer.newLine();
		writer.flush();
	}
    
	public LoggingInfo getLoggingInfo() {
		return info;
	}
    
    public void close() {
        try {
            if (socket != null) {
                socket.close();
            }
            if (osw != null) {
                osw.close();
            }
            if (isw != null) {
                isw.close();
            }
            socket = null;
            osw = null;
            isw = null;
        } catch (IOException e) {
            // Fail quietly
        	log.fatal("Failed to close event source.", e);
        }
    }
    
    public void log(String event) {  	
		log.info(info.logFrom() + " RECEIVED: " + event);
    }

}
