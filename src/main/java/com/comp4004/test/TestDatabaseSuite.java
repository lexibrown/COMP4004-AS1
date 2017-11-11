package main.java.com.comp4004.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import main.java.com.comp4004.test.database.TestBookDatabase;
import main.java.com.comp4004.test.database.TestLoanDatabase;
import main.java.com.comp4004.test.database.TestReservationDatabase;
import main.java.com.comp4004.test.database.TestUserDatabase;

@RunWith(Suite.class)
@SuiteClasses({ TestUserDatabase.class, TestBookDatabase.class, TestLoanDatabase.class, TestReservationDatabase.class })
public class TestDatabaseSuite {
}
