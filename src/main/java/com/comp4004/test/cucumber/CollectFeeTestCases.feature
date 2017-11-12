Feature: Collect Fee Test Cases

  Background:
    Given that each test should be independent from one another

  Scenario: Ti17 Collect fee but user privileges still revoked
    Given User "user1" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When User "user1" attempts to return copy 1 of book with ISBN: 12345678 overdue
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1" but privileges were revoked

		Given Collected "partial" fee for user "user1"
		
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System failed to borrow copy 1 of book with ISBN: 23456781 because user privileges are revoked

  Scenario: Tv17 Collect fee and clear user revoked status
    Given User "user1" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When User "user1" attempts to return copy 1 of book with ISBN: 12345678 overdue
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1" but privileges were revoked

		Given Collected "full" fee for user "user1"
		
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    