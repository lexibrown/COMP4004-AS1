package main.java.com.comp4004.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import main.java.com.comp4004.test.story.TestBookStories;
import main.java.com.comp4004.test.story.TestBorrowStories;
import main.java.com.comp4004.test.story.TestCopyStories;
import main.java.com.comp4004.test.story.TestFeeStories;
import main.java.com.comp4004.test.story.TestMonitorStories;
import main.java.com.comp4004.test.story.TestRenewStories;
import main.java.com.comp4004.test.story.TestReturnStories;
import main.java.com.comp4004.test.story.TestUserStories;

@RunWith(Suite.class)
@SuiteClasses({ TestUserStories.class, TestBookStories.class, TestCopyStories.class, TestBorrowStories.class,
		TestRenewStories.class, TestReturnStories.class, TestFeeStories.class, TestMonitorStories.class })
public class TestSuite {
}
