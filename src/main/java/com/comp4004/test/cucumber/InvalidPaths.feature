Feature: Invalid Paths

  Background:
    Given that each test should be independent from one another

  Scenario: Ti1 Add Redundant User
    Given User "user1" exists
    
    When Attempting to create user: "user1"
    Then System failed to add user: "user1" because it already exists

  Scenario: Ti2 Add Item to non-existent title
    Given No such book exists with ISBN: 12345678
    
    When Attempting to add copy 1 to book with ISBN: 12345678
    Then System failed to add copy to book with ISBN: 12345678 because book does not exist

  Scenario: Ti3 Add Redundant Title
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to add book "title" with ISBN: 12345678
    Then System failed to add book "title" with ISBN: 12345678 because it already exists

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

  Scenario: Ti9 Remove Non-existent Item
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When Attempting to remove copy 2 of book with ISBN: 12345678
    Then System failed to remove copy 2 to book with ISBN: 12345678 because copy does not exist

  Scenario: Ti10 Remove Borrowed Item
    Given User "user1" exists
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When Attempting to remove copy 1 of book with ISBN: 12345678
    Then System failed to remove copy 1 to book with ISBN: 12345678 because copy is currently loaned

  Scenario: Ti11 Remove borrowed/renewed item
    Given User "user1" exists
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When User "user1" attempts to renew copy 1 of book with ISBN: 12345678
    Then System successfully renewed copy 1 of book with ISBN 12345678 for user "user1"

    When Attempting to remove copy 1 of book with ISBN: 12345678
    Then System failed to remove copy 1 to book with ISBN: 12345678 because copy is currently loaned

  Scenario: Ti12 Remove title that still has a copy
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When Attempting to remove book "title" with ISBN: 12345678
    Then System failed to remove book: 12345678 because copies exist

  Scenario: Ti13 Remove title that has borrowed copy
    Given User "user1" exists
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When Attempting to remove book "title" with ISBN: 12345678
    Then System failed to remove book with ISBN: 12345678 because book is currently loaned

  Scenario: Ti14 Remove title that has a copy
    Given User "user1" exists
    Given Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    And Copy 2 of book "title" with ISBN 12345678 exists
        
    When Attempting to remove copy 2 of book with ISBN: 12345678
    Then System successfully removed copy 2 of book with ISBN: 12345678
    
    When Attempting to remove book "title" with ISBN: 12345678
    Then System failed to remove book: 12345678 because copies exist

  Scenario: Ti15 Remove Non-existent User
    When Attempting to remove user: "user1"
    Then System failed to remove user: "user1" that does not exist

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
    