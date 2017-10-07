package com.comp4004.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({TestUserDatabase.class, TestBookDatabase.class, TestLoanDatabase.class})
public class TestDatabaseSuite { }
