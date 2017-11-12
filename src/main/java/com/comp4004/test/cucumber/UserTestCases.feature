Feature: User Test Cases

  Background:
    Given that each test should be independent from one another
    
  Scenario: Tv1 Add User
    When Attempting to create user: "user1"
    Then System successfully added user: "user1"

  Scenario: Tv2 Add User
    Given User "user1" exists
    
    When Attempting to remove user: "user1"
    Then System successfully removed user: "user1"
    
    When Attempting to create user: "user1"
    Then System successfully added user: "user1"
    
  Scenario: Tv11 Remove User
    Given User "user1" exists
    
    When Attempting to remove user: "user1"
    Then System successfully removed user: "user1"
    
  Scenario: Ti1 Add Redundant User
    Given User "user1" exists
    
    When Attempting to create user: "user1"
    Then System failed to add user: "user1" because it already exists
    
  Scenario: Ti15 Remove Non-existent User
    When Attempting to remove user: "user1"
    Then System failed to remove user: "user1" that does not exist

  Scenario: Ti18 Remove user whose privileges are revoked
    Given User "user1" exists
    And User "user1" has their privileges are revoked

    When Attempting to remove user: "user1"
    Then System failed to remove user: "user1" because their privileges are revoked
    
  Scenario: Ti19 Remove user whose has loans
    Given User "user1" exists
    And Book "title" with ISBN 12345678 exists
    And Copy 1 of book "title" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"

    When Attempting to remove user: "user1"
    Then System failed to remove user: "user1" because they have existing loans
    
    