Feature: Borrow Test Cases

  Background: 
    Given that each test should be independent from one another

	Scenario: Tv8 Borrow
    Given User "user1" exists
    And User "user2" exists
    And Book "title1" with ISBN 12345678 exists
    And Book "title2" with ISBN 87654321 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    And Copy 2 of book "title1" with ISBN 12345678 exists
    And Copy 3 of book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title2" with ISBN 87654321 exists
    And Copy 2 of book "title2" with ISBN 87654321 exists
    And Copy 3 of book "title2" with ISBN 87654321 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    When User "user1" attempts to borrow copy 3 of book with ISBN: 87654321
    Then System successfully borrowed copy 3 of book with ISBN 87654321 to user "user1"
    
    When User "user2" attempts to borrow copy 2 of book with ISBN: 12345678
    Then System successfully borrowed copy 2 of book with ISBN 12345678 to user "user2"
    When User "user2" attempts to borrow copy 2 of book with ISBN: 87654321
    Then System successfully borrowed copy 2 of book with ISBN 87654321 to user "user2"
    
  Scenario: Tv15 Borrow
    Given User "user1" exists
    And User "user2" exists
    And Book "title1" with ISBN 12345678 exists
    And Book "title2" with ISBN 87654321 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    And Copy 2 of book "title1" with ISBN 12345678 exists
    And Copy 3 of book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title2" with ISBN 87654321 exists
    And Copy 2 of book "title2" with ISBN 87654321 exists
    And Copy 3 of book "title2" with ISBN 87654321 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    When User "user1" attempts to borrow copy 3 of book with ISBN: 87654321
    Then System successfully borrowed copy 3 of book with ISBN 87654321 to user "user1"
    
    When User "user2" attempts to borrow copy 2 of book with ISBN: 12345678
    Then System successfully borrowed copy 2 of book with ISBN 12345678 to user "user2"
    When User "user2" attempts to borrow copy 2 of book with ISBN: 87654321
    Then System successfully borrowed copy 2 of book with ISBN 87654321 to user "user2"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"
    When User "user1" attempts to return copy 3 of book with ISBN: 87654321
    Then System successfully returned copy 3 of book with ISBN 87654321 from user "user1"
    
    When User "user2" attempts to return copy 2 of book with ISBN: 12345678
    Then System successfully returned copy 2 of book with ISBN 12345678 from user "user2"
    When User "user2" attempts to return copy 2 of book with ISBN: 87654321
    Then System successfully returned copy 2 of book with ISBN 87654321 from user "user2"
    
    When User "user2" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user2"
    When User "user2" attempts to borrow copy 3 of book with ISBN: 87654321
    Then System successfully borrowed copy 3 of book with ISBN 87654321 to user "user2"
    
  Scenario: Ti4 Borrow same copy
    Given User "user1" exists
    And User "user2" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    When User "user2" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System failed to borrow copy 1 of book with ISBN: 12345678 because book is currently loaned
    
  Scenario: Ti5 Borrow renewed copy
    Given User "user1" exists
    And User "user2" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System successfully renewed copy 1 of book with ISBN 12345678 for user "user1"

    When User "user2" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System failed to borrow copy 1 of book with ISBN: 12345678 because book is currently loaned

  Scenario: Ti6 Borrow returned copy taken by other user
    Given User "user1" exists
    And User "user2" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"

    When User "user2" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user2"

    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System failed to borrow copy 1 of book with ISBN: 12345678 because book is currently loaned

  Scenario: Ti7 Borrow over max limit
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Book "title2" with ISBN 23456781 exists
    And Book "title3" with ISBN 34567812 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title2" with ISBN 23456781 exists
    And Copy 1 of book "title3" with ISBN 34567812 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    When User "user1" attempts to borrow copy 1 of book with ISBN: 23456781
    Then System successfully borrowed copy 1 of book with ISBN 23456781 to user "user1"

    When User "user1" attempts to borrow copy 1 of book with ISBN: 34567812
    Then System failed to borrow copy 1 of book with ISBN: 34567812 because maximum loans has been reached

  Scenario: Ti8 Borrow over max limit after return
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Book "title2" with ISBN 23456781 exists
    And Book "title3" with ISBN 34567812 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title2" with ISBN 23456781 exists
    And Copy 1 of book "title3" with ISBN 34567812 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    When User "user1" attempts to borrow copy 1 of book with ISBN: 23456781
    Then System successfully borrowed copy 1 of book with ISBN 23456781 to user "user1"

    When User "user1" attempts to return copy 1 of book with ISBN: 23456781
    Then System successfully returned copy 1 of book with ISBN 23456781 from user "user1"
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 34567812
    Then System successfully borrowed copy 1 of book with ISBN 34567812 to user "user1"
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 23456781
    Then System failed to borrow copy 1 of book with ISBN: 23456781 because maximum loans has been reached
    
  Scenario: Ti22 Borrow book when user privilege is revoked
    Given User "user1" exists
    And User "user1" has their privileges are revoked
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System failed to borrow copy 1 of book with ISBN: 23456781 because user privileges are revoked
    
    