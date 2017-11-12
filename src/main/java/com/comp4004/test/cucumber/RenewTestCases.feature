Feature: Renew Test Cases

  Background: 
    Given that each test should be independent from one another

  Scenario: Tv13 Renew Loan
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System successfully renewed copy 1 of book with ISBN 12345678 for user "user1"

  Scenario: Tv14 Renew Loan valid max times
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System successfully renewed copy 1 of book with ISBN 12345678 for user "user1"
    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System successfully renewed copy 1 of book with ISBN 12345678 for user "user1"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"
    
	Scenario: Tv16 Renew when full
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Book "title2" with ISBN 87654321 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    And Copy 2 of book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title2" with ISBN 87654321 exists
    And Copy 2 of book "title2" with ISBN 87654321 exists

    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    When User "user1" attempts to borrow copy 2 of book with ISBN: 87654321
    Then System successfully borrowed copy 2 of book with ISBN 87654321 to user "user1"
    
    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System successfully renewed copy 1 of book with ISBN 12345678 for user "user1"

    When User "user1" attempts to renew copy 2 of book with ISBN: 87654321
    Then System successfully renewed copy 2 of book with ISBN 87654321 for user "user1"

  Scenario: Ti16 Renew Returned Item
    Given User "user1" exists
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"

    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System failed to renew loan of copy 1 of book with ISBN: 12345678 for user "user1" because loan does not exist
    
	Scenario: Ti23 Renew book when user privilege is revoked
    Given User "user1" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    Given User "user1" has their privileges are revoked
    
		When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System failed to renew loan of copy 1 of book with ISBN: 12345678 for user "user1" because user privileges are revoked
    
