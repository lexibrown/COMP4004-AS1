package main.java.com.comp4004.server.tools;

public enum ActionResult {

	RESERVATION_MADE, // reservation successfully created
	RESERVATION_EXISTS, // reservation already exists
	NO_RESERVATION_EXISTS, // no such reservation exists

	NO_SUCH_BOOK, // no such book exists
	NO_SUCH_COPY, // no such copy exists
	NO_SUCH_USER, // no such user exists
	NO_SUCH_LOAN, // no such loan exists

	FEE_ADDED, // book returned but fee added to user
	PRIVILEGE_REVOKED, // book returned but privileges revoked

	NO_PRIVILEGE, // user does not have privileges

	MAX_RENEW, // maximum renews for book loan reached
	MAX_LOAN, // maximum amount of books loaned reached

	LOAN_EXISTS, // loan already exists
	COPIES_EXIST, // copies of book still exist
	
	BORROWED, // book successfully borrowed
	RENEWED, // book successfully renewed
	RETURNED, // book successfully returned

	HAS_LOANS, // user has loans

	REMOVED_USER, // successfully removed user
	REMOVED_BOOK, // successfully removed book
	REMOVED_COPY // successfully removed copy

}
