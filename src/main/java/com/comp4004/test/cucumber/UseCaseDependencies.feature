Feature: Use Case Dependencies

Scenario: S4

  Given Title "t3" with isbn "1234567890123" exists
  And Title "t1" with isbn "2468013579123" exists
  And Attempting to add copy 1 of item with isbn "1234567890123"
  And User "Antonio@carleton.ca" is created
  And Attempting to add copy 1 of item with isbn "2468013579123"
  And Attempting to add copy 2 of item with isbn "2468013579123"
  And User "Alex@carleton.ca" is created
  And Title "t2" with isbn "1357924680123" exists
  And Attempting to add copy 1 of item with isbn "1357924680123"
  And Attempting to add copy 2 of item with isbn "1234567890123"
  And Attempting to remove copy 0 of item with isbn "2468013579123"
  And User "Antonio@carleton.ca" attempts to borrow copy 1 of "1357924680123"
  And Attempting to remove copy 2 of item with isbn "1357924680123"
  And Attempting to remove copy 0 of item with isbn "1234567890123"
  And User "Antonio@carleton.ca" attempts to return copy 1 of "1357924680123"
  And Attempting to remove copy 0 of "1357924680123"
  And Attempting to remove copy 1 of item with isbn "2468013579123"
  And Attempt to remove title with isbn "2468013579123"
  And Attempting to remove copy 1 of item with isbn "1357924680123"
  And Attempting to remove user "Antonio@carleton.ca"
  And User "Alex@carleton.ca" attempts to return copy 1 of "1234567890123"
  And Attempting to remove user "Alex@carleton.ca"
  And Attempting to remove copy 1 of item with isbn "1234567890123"
  And Attempt to remove title with isbn "1357924680123"
  And Attempt to remove title with isbn "1234567890123"
  Then The system outputs "Success!"