package com.comp4004.communication;

import java.net.Socket;

public class LoggingInfo {

	private Socket socket;

	public LoggingInfo() {
		socket = null;
	}

	public LoggingInfo(Socket s) {
		socket = s;
	}

	public String logTo() {
		if (socket == null) {
			return "Null socket";
		}
		String info = "[" + socket.getLocalAddress() + ":" + socket.getLocalPort() + "] TO: "
				+ socket.getInetAddress().getHostAddress() + ":" + socket.getPort();
		return info;
	}

	public String logFrom() {
		if (socket == null) {
			return "Null socket";
		}
		String info = "[" + socket.getLocalAddress() + ":" + socket.getLocalPort() + "] FROM: "
				+ socket.getInetAddress().getHostAddress() + ":" + socket.getPort();
		return info;
	}

}
