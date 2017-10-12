package com.comp4004.utils;

import java.io.IOException;
import java.io.StringWriter;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class JsonUtil {
	static final ObjectMapper objectMapper = new ObjectMapper().disable(SerializationFeature.FAIL_ON_EMPTY_BEANS)
			.configure(JsonParser.Feature.ALLOW_COMMENTS, true);
	static final JsonFactory factory = objectMapper.getFactory();

	/**
	 * Returns json string of passed in object
	 * 
	 * @param object
	 * @return
	 * @throws Exception
	 */
	public static String stringify(Object object) throws Exception {
		if (object == null) {
			return null;
		}
		StringWriter sw = new StringWriter();
		JsonGenerator jgen = factory.createGenerator(sw);
		jgen.writeObject(object);
		jgen.close();
		return sw.toString();
	}

	/**
	 * Returns list of object passed in based on json provided
	 * 
	 * @param json
	 * @param objectClass
	 * @return
	 * @throws JsonParseException
	 * @throws IOException
	 */
	public static <O> O parseList(String json, Class<?> objectClass) throws JsonParseException, IOException {
		if (json == null) {
			return null;
		}
		return objectMapper.readValue(json,
				objectMapper.getTypeFactory().constructCollectionType(List.class, objectClass));
	}

	/**
	 * Converts json to passed in object type and returns it
	 * 
	 * @param json
	 * @param objectClass
	 * @return
	 * @throws JsonParseException
	 * @throws IOException
	 */
	public static <O> O parse(String json, Class<O> objectClass) throws JsonParseException, IOException {
		if (json == null) {
			return null;
		}
		JsonParser jp = factory.createParser(json);
		return jp.readValueAs(objectClass);
	}

}
