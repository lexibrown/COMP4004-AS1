Feature: Use Case Dependencies

  Scenario: S4

    When Attempting to add book "title3" with ISBN: 34567812
    Then System successfully added book: 34567812
    When Attempting to add book "title1" with ISBN: 12345678
    Then System successfully added book: 12345678

    When Attempting to add copy 1 to book with ISBN: 34567812
    Then System successfully added copy 1 to book with ISBN: 34567812

    When Attempting to create user: "user1"
    Then System successfully added user: "user1"

    When Attempting to add copy 1 to book with ISBN: 12345678
    Then System successfully added copy 1 to book with ISBN: 12345678
    When Attempting to add copy 2 to book with ISBN: 12345678
    Then System successfully added copy 2 to book with ISBN: 12345678

    When Attempting to create user: "user2"
    Then System successfully added user: "user2"

    When Attempting to add book "title2" with ISBN: 23456781
    Then System successfully added book: 23456781

    When Attempting to add copy 1 to book with ISBN: 23456781
    Then System successfully added copy 1 to book with ISBN: 23456781
    
    When Attempting to add copy 2 to book with ISBN: 34567812
    Then System successfully added copy 2 to book with ISBN: 34567812
    
    When Attempting to remove copy 1 of book with ISBN: 12345678
    Then System successfully removed copy 1 of book with ISBN: 12345678

    When User "user1" attempts to borrow copy 1 of book with ISBN: 23456781
    Then System successfully borrowed copy 1 of book with ISBN 23456781 to user "user1"

    When Attempting to add copy 2 to book with ISBN: 23456781
    Then System successfully added copy 2 to book with ISBN: 23456781

    When Attempting to remove copy 1 of book with ISBN: 34567812
    Then System successfully removed copy 1 of book with ISBN: 34567812

    When User "user1" attempts to return copy 1 of book with ISBN: 23456781
    Then System successfully returned copy 1 of book with ISBN 23456781 from user "user1"

    When User "user2" attempts to borrow copy 2 of book with ISBN: 34567812
    Then System successfully borrowed copy 2 of book with ISBN 34567812 to user "user2"

    When Attempting to remove copy 2 of book with ISBN: 12345678
    Then System successfully removed copy 2 of book with ISBN: 12345678

    When Attempting to remove copy 2 of book with ISBN: 23456781
    Then System successfully removed copy 2 of book with ISBN: 23456781

    When Attempting to remove book "title1" with ISBN: 12345678
    Then System successfully removed book: 12345678

    When Attempting to remove copy 1 of book with ISBN: 23456781
    Then System successfully removed copy 1 of book with ISBN: 23456781

    When Attempting to remove user: "user1"
    Then System successfully removed user: "user1"

    When User "user2" attempts to return copy 2 of book with ISBN: 34567812
    Then System successfully returned copy 2 of book with ISBN 34567812 from user "user2"

    When Attempting to remove user: "user2"
    Then System successfully removed user: "user2"

    When Attempting to remove copy 2 of book with ISBN: 34567812
    Then System successfully removed copy 2 of book with ISBN: 34567812

    When Attempting to remove book "title2" with ISBN: 23456781
    Then System successfully removed book: 23456781

    When Attempting to remove book "title3" with ISBN: 34567812
    Then System successfully removed book: 34567812

