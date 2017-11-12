Feature: Item Test Cases

  Background: 
    Given that each test should be independent from one another

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

  Scenario: Ti2 Add Item to non-existent title
    Given No such book exists with ISBN: 12345678
    
    When Attempting to add copy 1 to book with ISBN: 12345678
    Then System failed to add copy to book with ISBN: 12345678 because book does not exist

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

  Scenario: Ti21 Remove item from non-existent title
    Given No such book exists with ISBN: 12345678
    
    When Attempting to remove copy 1 of book with ISBN: 12345678
    Then System failed to remove copy 1 to book with ISBN: 12345678 because book does not exist 
    
