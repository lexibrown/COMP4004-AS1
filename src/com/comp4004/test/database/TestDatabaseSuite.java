package com.comp4004.test.database;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({TestUserDatabase.class, TestBookDatabase.class, TestLoanDatabase.class, TestReservationDatabase.class})
public class TestDatabaseSuite { }
