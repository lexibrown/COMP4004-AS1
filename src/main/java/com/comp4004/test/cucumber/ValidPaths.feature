Feature: Valid Paths

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

  Scenario: Tv3 Add Title
    When Attempting to add book "title" with ISBN: 12345678
    Then System successfully added book: 12345678

  Scenario: Tv4 Add Title
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to remove book "title" with ISBN: 12345678
    Then System successfully removed book: 12345678
    
    When Attempting to add book "title" with ISBN: 12345678
    Then System successfully added book: 12345678

  Scenario: Tv5 Add Item
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to add copy 1 to book with ISBN: 12345678
    Then System successfully added copy 1 to book with ISBN: 12345678

  Scenario: Tv6 Add Item
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to add copy 1 to book with ISBN: 12345678
    Then System successfully added copy 1 to book with ISBN: 12345678
    
    When Attempting to add copy 2 to book with ISBN: 12345678
    Then System successfully added copy 2 to book with ISBN: 12345678
    
    When Attempting to add copy 3 to book with ISBN: 12345678
    Then System successfully added copy 3 to book with ISBN: 12345678

  Scenario: Tv7 Add Item
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to add copy 1 to book with ISBN: 12345678
    Then System successfully added copy 1 to book with ISBN: 12345678
    When Attempting to add copy 2 to book with ISBN: 12345678
    Then System successfully added copy 2 to book with ISBN: 12345678
    When Attempting to add copy 3 to book with ISBN: 12345678
    Then System successfully added copy 3 to book with ISBN: 12345678
    
    When Attempting to remove copy 2 of book with ISBN: 12345678
    Then System successfully removed copy 2 of book with ISBN: 12345678
    
    When Attempting to add copy 2 to book with ISBN: 12345678
    Then System successfully added copy 2 to book with ISBN: 12345678
    When Attempting to add copy 4 to book with ISBN: 12345678
    Then System successfully added copy 4 to book with ISBN: 12345678

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

  Scenario: Tv9 Remove Item
    Given Book "title1" with ISBN 12345678 exists
    And Book "title2" with ISBN 87654321 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    And Copy 2 of book "title1" with ISBN 12345678 exists
    And Copy 3 of book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title2" with ISBN 87654321 exists
    And Copy 2 of book "title2" with ISBN 87654321 exists
    And Copy 3 of book "title2" with ISBN 87654321 exists
    
    When Attempting to remove copy 2 of book with ISBN: 12345678
    Then System successfully removed copy 2 of book with ISBN: 12345678
    
    When Attempting to remove copy 1 of book with ISBN: 87654321
    Then System successfully removed copy 1 of book with ISBN: 87654321
    When Attempting to remove copy 3 of book with ISBN: 87654321
    Then System successfully removed copy 3 of book with ISBN: 87654321

  Scenario: Tv10 Remove title. No copies involved
    Given Book "title1" with ISBN 12345678 exists
    
    When Attempting to remove book "title1" with ISBN: 12345678
    Then System successfully removed book: 12345678

  Scenario: Tv11 Remove User
    Given User "user1" exists
    
    When Attempting to remove user: "user1"
    Then System successfully removed user: "user1"

  Scenario: Tv12 Remove Title
    Given User "user1" exists
    And Book "title1" with ISBN 12345678 exists
    And Copy 1 of book "title1" with ISBN 12345678 exists
    
    When User "user1" attempts to borrow copy 1 of book with ISBN: 12345678
    Then System successfully borrowed copy 1 of book with ISBN 12345678 to user "user1"
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"
    
    When Attempting to remove copy 1 of book with ISBN: 12345678
    Then System successfully removed copy 1 of book with ISBN: 12345678
    
    When Attempting to remove book "title1" with ISBN: 12345678
    Then System successfully removed book: 12345678

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
    
    When User "user1" attempts to return copy 1 of book with ISBN: 12345678
    Then System successfully returned copy 1 of book with ISBN 12345678 from user "user1"

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
