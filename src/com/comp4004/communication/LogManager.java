package com.comp4004.communication;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class LogManager {

	private static LogManager _instance = null;

	public Logger getLogger(Object o) {
		return org.apache.log4j.LogManager.getLogger(o.getClass());
	}

	private LogManager() {
		String userDir = System.getProperty("user.dir");
		String configFile = String.format("%s\\%s\\%s.properties", userDir, "properties", "log4j");
		PropertyConfigurator.configure(configFile);
	}

	public static LogManager getInstance() {
		if (_instance == null) {
			synchronized (LogManager.class) {
				_instance = new LogManager();
			}
		}
		return _instance;
	}

}
