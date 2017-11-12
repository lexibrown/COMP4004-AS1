Feature: Title Test Cases

  Background:
    Given that each test should be independent from one another
    
  Scenario: Tv3 Add Title
    When Attempting to add book "title" with ISBN: 12345678
    Then System successfully added book: 12345678

  Scenario: Tv4 Add Title
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to remove book "title" with ISBN: 12345678
    Then System successfully removed book: 12345678
    
    When Attempting to add book "title" with ISBN: 12345678
    Then System successfully added book: 12345678
    
  Scenario: Tv10 Remove title. No copies involved
    Given Book "title1" with ISBN 12345678 exists
    
    When Attempting to remove book "title1" with ISBN: 12345678
    Then System successfully removed book: 12345678

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

  Scenario: Ti3 Add Redundant Title
    Given Book "title" with ISBN 12345678 exists
    
    When Attempting to add book "title" with ISBN: 12345678
    Then System failed to add book "title" with ISBN: 12345678 because it already exists

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

  Scenario: Ti20 Remove non-existent title
    Given No such book exists with ISBN: 12345678
    
    When Attempting to remove book "title" with ISBN: 12345678
    Then System failed to remove book: 12345678 because book does not exist
    
    