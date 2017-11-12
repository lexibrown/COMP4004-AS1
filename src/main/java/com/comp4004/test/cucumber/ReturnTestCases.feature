Feature: Return Test Cases

  Background: 
    Given that each test should be independent from one another

  Scenario: Tv18 Return book
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"

  Scenario: Tv19 Return book but fee added and user privilege not revoked
    Given User "user1" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678 late
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1" but fee was applied
    
	Scenario: Tv20 Return book but fee added and user privilege revoked
    Given User "user1" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678 overdue
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1" but privileges were revoked
    
	Scenario: Ti25 Return book returned book
	  Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"
	
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System failed to return loan of copy 1 of book with ISBN: 12345678 for user "user1" because loan does not exist
    
	Scenario: Ti26 Return book loaned by another user
	  Given User "user1" exists
	  And User "user2" exists
    And Book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user2" attempts to return copy 1 of book with ISBN: 12345678
    Then System failed to return loan of copy 1 of book with ISBN: 12345678 for user "user2" because loan does not exist
    
    