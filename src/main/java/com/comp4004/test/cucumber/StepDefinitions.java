package main.java.com.comp4004.test.cucumber;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import main.java.com.comp4004.server.Server;
import main.java.com.comp4004.server.ServerController;
import main.java.com.comp4004.server.tools.ActionResult;
import main.java.com.comp4004.utils.Config;

public class StepDefinitions {

	private ServerController c;
	private ActionResult result;

	@Before(order = 1)
	public void beforeScenario() {
		result = null;
		c = new ServerController(new Server(Config.DEFAULT_PORT));
		c.setTag(StepDefinitions.class.getName());
		try {
			c.start();
			c.clearData();
		} catch (IOException ioe) {
			fail("Failed to start server");
		}
	}

	@Before(order = 0)
	public void beforeScenarioStart() {
		System.out.println("-----------------Start of Scenario-----------------");
	}

	@After(order = 0)
	public void afterScenarioFinish() {
		System.out.println("-----------------End of Scenario-----------------");
	}

	@After(order = 1)
	public void afterScenario() {
		result = null;
		c.clearData();
		c = null;
	}

	@Given("^that each test should be independent from one another$")
	public void background() throws Throwable {
		result = null;
		if (c != null) {
			c.clearData();
		}
	}

	// user adding and removing

	@Given("^User \"([^\"]*)\" exists$")
	public void userExists(String username) throws Throwable {
		assertTrue(c.createUser(username, "password1"));
		assertNotNull(c.searchUser(username));
	}

	@When("^Attempting to create user: \"([^\"]*)\"$")
	public void addUser(String username) throws Throwable {
		c.createUser(username, "password1");
	}

	@When("^Attempting to remove user: \"([^\"]*)\"$")
	public void removeUser(String username) throws Throwable {
		result = c.removeUser(username);
	}

	// book adding and removing

	@Given("^Book \"([^\"]*)\" with ISBN (\\d+) exists$")
	public void bookExists(String title, int ISBN) throws Throwable {
		assertTrue(c.addBook(ISBN, title));
		assertNotNull(c.searchBook(ISBN));
	}

	@Given("^No such book exists with ISBN: (\\d+)$")
	public void noSuchBookExists(int ISBN) throws Throwable {
		assertNull(c.searchBook(ISBN));
	}

	@When("^Attempting to add book \"([^\"]*)\" with ISBN: (\\d+)$")
	public void addBook(String title, int ISBN) throws Throwable {
		c.addBook(ISBN, title);
	}

	@When("^Attempting to remove book \"([^\"]*)\" with ISBN: (\\d+)$")
	public void removeBook(String title, int ISBN) throws Throwable {
		result = c.removeBook(ISBN);
	}

	// copy adding and removing

	@Given("^Copy (\\d+) of book \"([^\"]*)\" with ISBN (\\d+) exists$")
	public void copyExists(int copy, String title, int ISBN) throws Throwable {
		if (c.searchBook(ISBN) == null) {
			assertTrue(c.addBook(ISBN, title));
		}
		assertTrue(c.addCopy(ISBN));
		assertNotNull(c.searchBook(ISBN).getCopy(copy));
	}

	@When("^Attempting to add copy (\\d+) to book with ISBN: (\\d+)$")
	public void addCopy(int copy, int ISBN) throws Throwable {
		c.addCopy(ISBN);
	}

	@When("^Attempting to remove copy (\\d+) of book with ISBN: (\\d+)$")
	public void removeCopy(int copy, int ISBN) throws Throwable {
		result = c.removeCopy(ISBN, copy);
	}

	// other functionality

	@When("^User \"([^\"]*)\" attempts to borrow copy (\\d+) of book with ISBN: (\\d+)$")
	public void borrow(String username, int copy, int ISBN) throws Throwable {
		result = c.borrow(username, ISBN, copy);
	}

	@When("^User \"([^\"]*)\" attempts to return copy (\\d+) of book with ISBN: (\\d+)$")
	public void returnBook(String username, int copy, int ISBN) throws Throwable {
		result = c.returnLoan(username, ISBN, copy);
	}

	@When("^User \"([^\"]*)\" attempts to renew copy (\\d+) of book with ISBN: (\\d+)$")
	public void renew(String username, int copy, int ISBN) throws Throwable {
		result = c.renew(username, ISBN, copy);
	}

	// positive then results

	@Then("^System successfully added user: \"([^\"]*)\"$")
	public void successfullyAddedUser(String username) throws Throwable {
		assertNotNull(c.searchUser(username));
	}

	@Then("^System successfully added book: (\\d+)$")
	public void successfullyAddedBook(int ISBN) throws Throwable {
		assertNotNull(c.searchBook(ISBN));
	}

	@Then("^System successfully added copy (\\d+) to book with ISBN: (\\d+)$")
	public void successfullyAddedCopy(int copy, int ISBN) throws Throwable {
		assertNotNull(c.searchBook(ISBN).getCopy(copy));
	}

	@Then("^System successfully removed user: \"([^\"]*)\"$")
	public void successfullyRemovedUser(String username) throws Throwable {
		assertNull(c.searchUser(username));
		assertEquals(ActionResult.REMOVED_USER, result);
		result = null;
	}

	@Then("^System successfully removed book: (\\d+)$")
	public void successfullyRemovedBook(int ISBN) throws Throwable {
		assertNull(c.searchBook(ISBN));
		assertEquals(ActionResult.REMOVED_BOOK, result);
		result = null;
	}

	@Then("^System successfully removed copy (\\d+) of book with ISBN: (\\d+)$")
	public void successfullyRemovedCopy(int copy, int ISBN) throws Throwable {
		assertNull(c.searchBook(ISBN).getCopy(copy));
		assertEquals(ActionResult.REMOVED_COPY, result);
		result = null;
	}

	@Then("^System successfully borrowed copy (\\d+) of book with ISBN (\\d+) to user \"([^\"]*)\"")
	public void successfulBorrow(int copy, int ISBN, String username) throws Throwable {
		assertTrue(c.isBorrowed(ISBN, copy, username));
		assertEquals(ActionResult.BORROWED, result);
		result = null;
	}

	@Then("^System successfully returned copy (\\d+) of book with ISBN (\\d+) from user \"([^\"]*)\"")
	public void successfulReturn(int copy, int ISBN, String username) throws Throwable {
		assertFalse(c.isBorrowed(ISBN, copy, username));
		assertEquals(ActionResult.RETURNED, result);
		result = null;
	}

	@Then("^System successfully renewed copy (\\d+) of book with ISBN (\\d+) for user \"([^\"]*)\"")
	public void successfulRenewal(int copy, int ISBN, String username) throws Throwable {
		assertTrue(c.isBorrowed(ISBN, copy, username));
		assertEquals(ActionResult.RENEWED, result);
		result = null;
	}

	// negative then results

	@Then("^System failed to add user: \"([^\"]*)\" because it already exists$")
	public void failedToAddUser(String username) throws Throwable {
		assertNotNull(c.searchUser(username));
		assertFalse(c.createUser(username, "password1"));
	}

	@Then("^System failed to add book \"([^\"]*)\" with ISBN: (\\d+) because it already exists$")
	public void failedToAddBook(String title, int ISBN) throws Throwable {
		assertNotNull(c.searchBook(ISBN));
		assertFalse(c.addBook(ISBN, title));
	}

	@Then("^System failed to add copy to book with ISBN: (\\d+) because book does not exist$")
	public void failedToAddCopy(int ISBN) throws Throwable {
		assertNull(c.searchBook(ISBN));
		assertFalse(c.addCopy(ISBN));
	}

	@Then("^System failed to remove user: \"([^\"]*)\" that does not exist$")
	public void failedToRemoveUser(String username) throws Throwable {
		assertNull(c.searchUser(username));
		assertEquals(ActionResult.NO_SUCH_USER, result);
		result = null;
	}

	@Then("^System failed to remove book: (\\d+) because copies exist$")
	public void failedToRemoveBook(int ISBN) throws Throwable {
		assertNotNull(c.searchBook(ISBN));
		assertEquals(ActionResult.COPIES_EXIST, result);
		result = null;
	}

	@Then("^System failed to remove book with ISBN: (\\d+) because book is currently loaned")
	public void failedToRemoveBookLoan(int ISBN) throws Throwable {
		assertNotNull(c.searchBook(ISBN));
		assertEquals(ActionResult.LOAN_EXISTS, result);
		result = null;
	}
	
	@Then("^System failed to remove copy (\\d+) to book with ISBN: (\\d+) because copy does not exist$")
	public void failedToRemoveCopy(int copy, int ISBN) throws Throwable {
		assertNull(c.searchBook(ISBN).getCopy(copy));
		assertEquals(ActionResult.NO_SUCH_COPY, result);
		result = null;
	}

	@Then("^System failed to remove copy (\\d+) to book with ISBN: (\\d+) because copy is currently loaned$")
	public void failedToRemoveCopyLoan(int copy, int ISBN) throws Throwable {
		assertNotNull(c.searchBook(ISBN).getCopy(copy));
		assertEquals(ActionResult.LOAN_EXISTS, result);
		result = null;
	}
	
	@Then("^System failed to borrow copy (\\d+) of book with ISBN: (\\d+) because book is currently loaned$")
	public void failedToBorrowBook(int copy, int ISBN) throws Throwable {
		assertTrue(c.isBorrowed(ISBN, copy));
		assertEquals(ActionResult.LOAN_EXISTS, result);
		result = null;
	}

	@Then("^System failed to borrow copy (\\d+) of book with ISBN: (\\d+) because maximum loans has been reached$")
	public void failedToBorrowBookMax(int copy, int ISBN) throws Throwable {
		assertFalse(c.isBorrowed(ISBN, copy));
		assertEquals(ActionResult.MAX_LOAN, result);
		result = null;
	}

	@Then("^System failed to renew loan of copy (\\d+) of book with ISBN: (\\d+) for user \"([^\"]*)\" because loan does not exist$")
	public void failedToRenewBook(int copy, int ISBN, String username) throws Throwable {
		assertFalse(c.isBorrowed(ISBN, copy, username));
		assertEquals(ActionResult.NO_SUCH_LOAN, result);
		result = null;
	}
	
}