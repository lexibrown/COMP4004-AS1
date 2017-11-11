Feature: Invalid Paths

  Background:
    Given that each test should be independent from one another

  Scenario: Ti1 Add Redundant User
    Given User "antonio@carleton.ca" is created
    When Attempting to add the new user "antonio@carleton.ca"
    Then The system outputs "The User Already Exists!"

  Scenario: Ti2 Add Item to non-existent title
    Given No title exists with isbn "1357924680123"
    When Attempting to add copy 1 of item with isbn "1357924680123"
    Then The system outputs "The Title Does Not Exist! Would you like to add it? (y/n)"

  Scenario: Ti3 Add Redundant Title
    Given Title "2001: A Space Odyssey" with isbn "2468013579123" exists
    When Attempting to add title "2001: A Space Odyssey" with isbn "2468013579123" again
    Then The system outputs "Item added successfully!"

  Scenario: Ti4 Borrow same copy
    Given User "antonio@carleton.ca" is created
    And User "alex@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    Then The system outputs "Success!"
    And User "alex@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    Then The system outputs "Item Not Available!"

  Scenario: Ti5 Borrow renewed copy
    Given User "antonio@carleton.ca" is created
    And User "alex@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" renews copy 0 of "1234567890123"
    And User "alex@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    Then The system outputs "Item Not Available!"

  Scenario: Ti6 Borrow returned copy taken by other user
    Given User "antonio@carleton.ca" is created
    And User "alex@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" attempts to return copy 0 of "1234567890123"
    And User "alex@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    Then The system outputs "Item Not Available!"

  Scenario: Ti7 Borrow over max limit
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Title "t2" with isbn "2468013579123" exists
    And Title "t3" with isbn "1357924680123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    And Attempting to add copy 1 of item with isbn "2468013579123"
    And Attempting to add copy 1 of item with isbn "1357924680123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" attempts to borrow copy 0 of "2468013579123"
    And User "antonio@carleton.ca" attempts to borrow copy 0 of "1357924680123"
    Then The system outputs "Maximum Borrowed Items Exceeded!"

  Scenario: Ti8 Borrow over max limit after return
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Title "t2" with isbn "2468013579123" exists
    And Title "t3" with isbn "1357924680123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    And Attempting to add copy 1 of item with isbn "2468013579123"
    And Attempting to add copy 1 of item with isbn "1357924680123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" attempts to borrow copy 0 of "2468013579123"
    And User "antonio@carleton.ca" attempts to return copy 0 of "2468013579123"
    And User "antonio@carleton.ca" attempts to borrow copy 0 of "1357924680123"
    Then The system outputs "Success"
    And User "antonio@carleton.ca" attempts to borrow copy 0 of "2468013579123"
    Then The system outputs "Maximum Borrowed Items Exceeded"

  Scenario: Ti9 Remove Non-existent Item
    Given Title "t1" with isbn "2121212121211" exists
    When Attempting to add copy 1 of item with isbn "2121212121211"
    And Attempting to remove copy 2 of item with isbn "2121212121211"
    Then The system outputs "The Item Does Not Exist!"

  Scenario: Ti10 Remove Borrowed Item
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And Attempting to remove copy 0 of item with isbn "1234567890123"
    Then The system outputs "Outstanding Loan exists!"

  Scenario: Ti11 Remove borrowed/renewed item
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" renews copy 0 of "1234567890123"
    And Attempting to remove copy 0 of item with isbn "1234567890123"
    Then The system outputs "Outstanding Loan exists!"

  Scenario: Ti12 Remove title that still has a copy
    Given Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When Attempting to remove title "1234567890123"
    Then The system outputs "Unable to delete title, more than 1 item instance exists!"

  Scenario: Ti13 Remove title that has borrowed copy
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And Attempting to remove title "1234567890123"
    Then The system outputs "Outstanding Loan Exists!"

  Scenario: Ti14 Remove title that has a copy
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 2 of item with isbn "1234567890123"
    And Attempting to add copy 3 of item with isbn "1234567890123"
    When Attempting to remove copy 1 of item with isbn "1234567890123"
    And Attempting to remove title "1234567890123"
    Then The system outputs "Unable to delete title, more than 1 item instance exists!"

  Scenario: Ti15 Remove Non-existent User
    When Attempting to remove user "alex@carleton.ca"
    Then The system outputs "The User Does Not Exist!"

  Scenario: Ti16 Renew Returned Item
    Given User "antonio@carleton.ca" is created
    And Title "t1" with isbn "1234567890123" exists
    And Attempting to add copy 1 of item with isbn "1234567890123"
    When User "antonio@carleton.ca" attempts to borrow copy 0 of "1234567890123"
    And User "antonio@carleton.ca" attempts to return copy 0 of "1234567890123"
    And User "antonio@carleton.ca" renews copy 0 of "1234567890123"
    Then The system outputs "No Such Loan Exists!"