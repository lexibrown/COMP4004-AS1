$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/java/com/comp4004/test/cucumber/BorrowTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Borrow Test Cases",
  "description": "",
  "id": "borrow-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 159210,
  "status": "passed"
});
formatter.before({
  "duration": 62011235,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 99050232,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv8 Borrow",
  "description": "",
  "id": "borrow-test-cases;tv8-borrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Copy 3 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Copy 3 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User \"user1\" attempts to borrow copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "System successfully borrowed copy 3 of book with ISBN 87654321 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "System successfully borrowed copy 2 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "System successfully borrowed copy 2 of book with ISBN 87654321 to user \"user2\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 273054312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2402369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 4337776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 6
    },
    {
      "val": "87654321",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1918419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 2628740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1781332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1897876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1789234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1803851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 2356543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 13358217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 199111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 6413035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 148938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4654615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 148148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4995159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 185283,
  "status": "passed"
});
formatter.after({
  "duration": 3970764,
  "status": "passed"
});
formatter.after({
  "duration": 544394,
  "status": "passed"
});
formatter.before({
  "duration": 79803,
  "status": "passed"
});
formatter.before({
  "duration": 4690171,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4843059,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Tv15 Borrow",
  "description": "",
  "id": "borrow-test-cases;tv15-borrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Copy 3 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Copy 3 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User \"user1\" attempts to borrow copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "System successfully borrowed copy 3 of book with ISBN 87654321 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "System successfully borrowed copy 2 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "System successfully borrowed copy 2 of book with ISBN 87654321 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User \"user1\" attempts to return copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "System successfully returned copy 3 of book with ISBN 87654321 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User \"user2\" attempts to return copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "System successfully returned copy 2 of book with ISBN 12345678 from user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User \"user2\" attempts to return copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "System successfully returned copy 2 of book with ISBN 87654321 from user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User \"user2\" attempts to borrow copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "System successfully borrowed copy 3 of book with ISBN 87654321 to user \"user2\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2159011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1646222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 5232591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 6
    },
    {
      "val": "87654321",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 6311108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1917628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1648197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1867851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1853628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 2894221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1535605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4699653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 116149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4711110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 100345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 6243158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 119309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5788837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 101926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 8390317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 167111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 5354269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 106271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 8540046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 158814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 672790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 101531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4939849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 120494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5212442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 168296,
  "status": "passed"
});
formatter.after({
  "duration": 2766616,
  "status": "passed"
});
formatter.after({
  "duration": 29234,
  "status": "passed"
});
formatter.before({
  "duration": 198321,
  "status": "passed"
});
formatter.before({
  "duration": 4002369,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4649875,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Ti4 Borrow same copy",
  "description": "",
  "id": "borrow-test-cases;ti4-borrow-same-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "System failed to borrow copy 1 of book with ISBN: 12345678 because book is currently loaned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1485036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1705086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1477135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1594468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5278022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 125235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 167111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBook(int,int)"
});
formatter.result({
  "duration": 91259,
  "status": "passed"
});
formatter.after({
  "duration": 3048296,
  "status": "passed"
});
formatter.after({
  "duration": 26864,
  "status": "passed"
});
formatter.before({
  "duration": 49777,
  "status": "passed"
});
formatter.before({
  "duration": 3866073,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3016295,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Ti5 Borrow renewed copy",
  "description": "",
  "id": "borrow-test-cases;ti5-borrow-renewed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "System failed to borrow copy 1 of book with ISBN: 12345678 because book is currently loaned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1676642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1727209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1517036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1625678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4421134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 200691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 6642960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 113778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 139457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBook(int,int)"
});
formatter.result({
  "duration": 50568,
  "status": "passed"
});
formatter.after({
  "duration": 2805332,
  "status": "passed"
});
formatter.after({
  "duration": 28050,
  "status": "passed"
});
formatter.before({
  "duration": 496592,
  "status": "passed"
});
formatter.before({
  "duration": 5411949,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3492739,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Ti6 Borrow returned copy taken by other user",
  "description": "",
  "id": "borrow-test-cases;ti6-borrow-returned-copy-taken-by-other-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 92,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "System failed to borrow copy 1 of book with ISBN: 12345678 because book is currently loaned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 4929578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 4318418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1935011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1866666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5852838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 143012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 2534320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 161580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5598022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 127605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 291160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBook(int,int)"
});
formatter.result({
  "duration": 192000,
  "status": "passed"
});
formatter.after({
  "duration": 5119603,
  "status": "passed"
});
formatter.after({
  "duration": 69926,
  "status": "passed"
});
formatter.before({
  "duration": 124444,
  "status": "passed"
});
formatter.before({
  "duration": 5011751,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3237925,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Ti7 Borrow over max limit",
  "description": "",
  "id": "borrow-test-cases;ti7-borrow-over-max-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Copy 1 of book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Copy 1 of book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "System successfully borrowed copy 1 of book with ISBN 23456781 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "System failed to borrow copy 1 of book with ISBN: 34567812 because maximum loans has been reached",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 5423010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1786468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 6
    },
    {
      "val": "23456781",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2280690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title3",
      "offset": 6
    },
    {
      "val": "34567812",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2123061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 3026962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "23456781",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 8386367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title3",
      "offset": 16
    },
    {
      "val": "34567812",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 3512888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 10197725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 122865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "23456781",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 6114763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "23456781",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 1047308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "34567812",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 192000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "34567812",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBookMax(int,int)"
});
formatter.result({
  "duration": 111802,
  "status": "passed"
});
formatter.after({
  "duration": 3530665,
  "status": "passed"
});
formatter.after({
  "duration": 35160,
  "status": "passed"
});
formatter.before({
  "duration": 458271,
  "status": "passed"
});
formatter.before({
  "duration": 3933628,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 6145183,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Ti8 Borrow over max limit after return",
  "description": "",
  "id": "borrow-test-cases;ti8-borrow-over-max-limit-after-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 127,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "Book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Copy 1 of book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Copy 1 of book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "System successfully borrowed copy 1 of book with ISBN 23456781 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "System successfully returned copy 1 of book with ISBN 23456781 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "System successfully borrowed copy 1 of book with ISBN 34567812 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "System failed to borrow copy 1 of book with ISBN: 23456781 because maximum loans has been reached",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2036542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1693234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 6
    },
    {
      "val": "23456781",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1612246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title3",
      "offset": 6
    },
    {
      "val": "34567812",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1610667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 4027653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "23456781",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 6500344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title3",
      "offset": 16
    },
    {
      "val": "34567812",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 6185874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5743800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 281284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "23456781",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5854813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "23456781",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 88493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "23456781",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 1594864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "23456781",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 105086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "34567812",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 14040093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "34567812",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 1661234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "23456781",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 178568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "23456781",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBookMax(int,int)"
});
formatter.result({
  "duration": 90074,
  "status": "passed"
});
formatter.after({
  "duration": 5907356,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 53728,
  "status": "passed"
});
formatter.before({
  "duration": 6052343,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 6495603,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "Ti22 Borrow book when user privilege is revoked",
  "description": "",
  "id": "borrow-test-cases;ti22-borrow-book-when-user-privilege-is-revoked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 150,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "User \"user1\" has their privileges are revoked",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "System failed to borrow copy 1 of book with ISBN: 23456781 because user privileges are revoked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1803852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.privilegeRevoked(String)"
});
formatter.result({
  "duration": 4581924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2120690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 5654516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 201481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "23456781",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBookRevoked(int,int)"
});
formatter.result({
  "duration": 102716,
  "status": "passed"
});
formatter.after({
  "duration": 3305875,
  "status": "passed"
});
formatter.after({
  "duration": 39111,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/CollectFeeTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Collect Fee Test Cases",
  "description": "",
  "id": "collect-fee-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 133531,
  "status": "passed"
});
formatter.before({
  "duration": 25227842,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3171555,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Ti17 Collect fee but user privileges still revoked",
  "description": "",
  "id": "collect-fee-test-cases;ti17-collect-fee-but-user-privileges-still-revoked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678 overdue",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\" but privileges were revoked",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Collected \"partial\" fee for user \"user1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "System failed to borrow copy 1 of book with ISBN: 23456781 because user privileges are revoked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2048394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2976394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 3355258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5396541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 151309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBookOverdue(String,int,int)"
});
formatter.result({
  "duration": 2461629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturnLateRevoke(int,int,String)"
});
formatter.result({
  "duration": 149728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "partial",
      "offset": 11
    },
    {
      "val": "user1",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.collectFee(String,String)"
});
formatter.result({
  "duration": 6931356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 122074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "23456781",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToBorrowBookRevoked(int,int)"
});
formatter.result({
  "duration": 65185,
  "status": "passed"
});
formatter.after({
  "duration": 3785085,
  "status": "passed"
});
formatter.after({
  "duration": 123654,
  "status": "passed"
});
formatter.before({
  "duration": 209382,
  "status": "passed"
});
formatter.before({
  "duration": 8444441,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4298665,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Tv17 Collect fee and clear user revoked status",
  "description": "",
  "id": "collect-fee-test-cases;tv17-collect-fee-and-clear-user-revoked-status",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678 overdue",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\" but privileges were revoked",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Collected \"full\" fee for user \"user1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1726419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 5532442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 7369873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 13139353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 114568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBookOverdue(String,int,int)"
});
formatter.result({
  "duration": 2465974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturnLateRevoke(int,int,String)"
});
formatter.result({
  "duration": 125234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "full",
      "offset": 11
    },
    {
      "val": "user1",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.collectFee(String,String)"
});
formatter.result({
  "duration": 1878123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 9750119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 161581,
  "status": "passed"
});
formatter.after({
  "duration": 4087307,
  "status": "passed"
});
formatter.after({
  "duration": 125234,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/ItemTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Item Test Cases",
  "description": "",
  "id": "item-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 82173,
  "status": "passed"
});
formatter.before({
  "duration": 6917133,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3638912,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv5 Add Item",
  "description": "",
  "id": "item-test-cases;tv5-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "System successfully added copy 1 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1685333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 2204838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 96790,
  "status": "passed"
});
formatter.after({
  "duration": 3621925,
  "status": "passed"
});
formatter.after({
  "duration": 30815,
  "status": "passed"
});
formatter.before({
  "duration": 144197,
  "status": "passed"
});
formatter.before({
  "duration": 3597035,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4071900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Tv6 Add Item",
  "description": "",
  "id": "item-test-cases;tv6-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "System successfully added copy 1 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Attempting to add copy 3 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "System successfully added copy 3 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 19014709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1985580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 82567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1526123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 82568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1351505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 64395,
  "status": "passed"
});
formatter.after({
  "duration": 2785184,
  "status": "passed"
});
formatter.after({
  "duration": 27654,
  "status": "passed"
});
formatter.before({
  "duration": 107061,
  "status": "passed"
});
formatter.before({
  "duration": 5677035,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2983900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tv7 Add Item",
  "description": "",
  "id": "item-test-cases;tv7-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "System successfully added copy 1 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Attempting to add copy 3 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "System successfully added copy 3 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Attempting to add copy 4 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "System successfully added copy 4 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1915654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 2051159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 89284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1712987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 93629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 3195653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 77432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 2052740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 86123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1751308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 179358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1746963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 67951,
  "status": "passed"
});
formatter.after({
  "duration": 4447603,
  "status": "passed"
});
formatter.after({
  "duration": 37136,
  "status": "passed"
});
formatter.before({
  "duration": 210568,
  "status": "passed"
});
formatter.before({
  "duration": 6184294,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4116542,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Tv9 Remove Item",
  "description": "",
  "id": "item-test-cases;tv9-remove-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Copy 3 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Copy 3 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Attempting to remove copy 1 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "System successfully removed copy 1 of book with ISBN: 87654321",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Attempting to remove copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "System successfully removed copy 3 of book with ISBN: 87654321",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2418567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 6
    },
    {
      "val": "87654321",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2308344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 5588541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1737876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 3827752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1753679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1389827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1404444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 858469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 67951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "87654321",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1460148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "87654321",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 71111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    },
    {
      "val": "87654321",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 5129084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 33
    },
    {
      "val": "87654321",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 91259,
  "status": "passed"
});
formatter.after({
  "duration": 3913085,
  "status": "passed"
});
formatter.after({
  "duration": 63210,
  "status": "passed"
});
formatter.before({
  "duration": 67951,
  "status": "passed"
});
formatter.before({
  "duration": 4997924,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3466665,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Ti2 Add Item to non-existent title",
  "description": "",
  "id": "item-test-cases;ti2-add-item-to-non-existent-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "No such book exists with ISBN: 12345678",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "System failed to add copy to book with ISBN: 12345678 because book does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.noSuchBookExists(int)"
});
formatter.result({
  "duration": 77827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 458666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.failedToAddCopy(int)"
});
formatter.result({
  "duration": 123654,
  "status": "passed"
});
formatter.after({
  "duration": 3823011,
  "status": "passed"
});
formatter.after({
  "duration": 37530,
  "status": "passed"
});
formatter.before({
  "duration": 620246,
  "status": "passed"
});
formatter.before({
  "duration": 6561577,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 6026270,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Ti9 Remove Non-existent Item",
  "description": "",
  "id": "item-test-cases;ti9-remove-non-existent-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "System failed to remove copy 2 to book with ISBN: 12345678 because copy does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2434765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1936987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 237432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToRemoveCopy(int,int)"
});
formatter.result({
  "duration": 137086,
  "status": "passed"
});
formatter.after({
  "duration": 5844146,
  "status": "passed"
});
formatter.after({
  "duration": 439704,
  "status": "passed"
});
formatter.before({
  "duration": 58864,
  "status": "passed"
});
formatter.before({
  "duration": 5658862,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4284443,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Ti10 Remove Borrowed Item",
  "description": "",
  "id": "item-test-cases;ti10-remove-borrowed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "System failed to remove copy 1 to book with ISBN: 12345678 because copy is currently loaned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 3902023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1949629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1846123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 10394860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 111012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 147358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToRemoveCopyLoan(int,int)"
});
formatter.result({
  "duration": 109827,
  "status": "passed"
});
formatter.after({
  "duration": 3998023,
  "status": "passed"
});
formatter.after({
  "duration": 52543,
  "status": "passed"
});
formatter.before({
  "duration": 37926,
  "status": "passed"
});
formatter.before({
  "duration": 5287504,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4404146,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Ti11 Remove borrowed/renewed item",
  "description": "",
  "id": "item-test-cases;ti11-remove-borrowed/renewed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "System failed to remove copy 1 to book with ISBN: 12345678 because copy is currently loaned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1852443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1835061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 3210270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 7390416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 68741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 5007011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 96790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 101926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToRemoveCopyLoan(int,int)"
});
formatter.result({
  "duration": 71111,
  "status": "passed"
});
formatter.after({
  "duration": 3227258,
  "status": "passed"
});
formatter.after({
  "duration": 165530,
  "status": "passed"
});
formatter.before({
  "duration": 35556,
  "status": "passed"
});
formatter.before({
  "duration": 8270614,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 6331652,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Ti21 Remove item from non-existent title",
  "description": "",
  "id": "item-test-cases;ti21-remove-item-from-non-existent-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "No such book exists with ISBN: 12345678",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "System failed to remove copy 1 to book with ISBN: 12345678 because book does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.noSuchBookExists(int)"
});
formatter.result({
  "duration": 101136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 157234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToRemoveCopyBook(int,int)"
});
formatter.result({
  "duration": 173037,
  "status": "passed"
});
formatter.after({
  "duration": 4055702,
  "status": "passed"
});
formatter.after({
  "duration": 26074,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/RenewTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Renew Test Cases",
  "description": "",
  "id": "renew-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 94025,
  "status": "passed"
});
formatter.before({
  "duration": 7369084,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 7336688,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv13 Renew Loan",
  "description": "",
  "id": "renew-test-cases;tv13-renew-loan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1726419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1583012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1360197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5741825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 110617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 4332640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 74667,
  "status": "passed"
});
formatter.after({
  "duration": 2826666,
  "status": "passed"
});
formatter.after({
  "duration": 31210,
  "status": "passed"
});
formatter.before({
  "duration": 105877,
  "status": "passed"
});
formatter.before({
  "duration": 6321380,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4586269,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Tv14 Renew Loan valid max times",
  "description": "",
  "id": "renew-test-cases;tv14-renew-loan-valid-max-times",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1779357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1686123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1581037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5478714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 140247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 5716936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 242568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 6471108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 77037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 477235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 53729,
  "status": "passed"
});
formatter.after({
  "duration": 2789135,
  "status": "passed"
});
formatter.after({
  "duration": 23308,
  "status": "passed"
});
formatter.before({
  "duration": 47407,
  "status": "passed"
});
formatter.before({
  "duration": 4185282,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4334615,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Tv16 Renew when full",
  "description": "",
  "id": "renew-test-cases;tv16-renew-when-full",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User \"user1\" attempts to borrow copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System successfully borrowed copy 2 of book with ISBN 87654321 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User \"user1\" attempts to renew copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "System successfully renewed copy 2 of book with ISBN 87654321 for user \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1588148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1767901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 6
    },
    {
      "val": "87654321",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1458962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1432098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1567209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 6840491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title2",
      "offset": 16
    },
    {
      "val": "87654321",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 2424098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 10403552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 58074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5436442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 87308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 6231306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 97975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "87654321",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 6547750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "87654321",
      "offset": 53
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulRenewal(int,int,String)"
});
formatter.result({
  "duration": 101136,
  "status": "passed"
});
formatter.after({
  "duration": 2902518,
  "status": "passed"
});
formatter.after({
  "duration": 51753,
  "status": "passed"
});
formatter.before({
  "duration": 131951,
  "status": "passed"
});
formatter.before({
  "duration": 4758122,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 6915947,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Ti16 Renew Returned Item",
  "description": "",
  "id": "renew-test-cases;ti16-renew-returned-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "System failed to renew loan of copy 1 of book with ISBN: 12345678 for user \"user1\" because loan does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 9852836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2675752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 3420838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 8587848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 58864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 805926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 75852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 137482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    },
    {
      "val": "user1",
      "offset": 76
    }
  ],
  "location": "StepDefinitions.failedToRenewBook(int,int,String)"
});
formatter.result({
  "duration": 82173,
  "status": "passed"
});
formatter.after({
  "duration": 6148738,
  "status": "passed"
});
formatter.after({
  "duration": 32790,
  "status": "passed"
});
formatter.before({
  "duration": 48987,
  "status": "passed"
});
formatter.before({
  "duration": 3948246,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4808690,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Ti23 Renew book when user privilege is revoked",
  "description": "",
  "id": "renew-test-cases;ti23-renew-book-when-user-privilege-is-revoked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User \"user1\" has their privileges are revoked",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "System failed to renew loan of copy 1 of book with ISBN: 12345678 for user \"user1\" because user privileges are revoked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 4326320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1679407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 2989035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 9135009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 79013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.privilegeRevoked(String)"
});
formatter.result({
  "duration": 1332543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.renew(String,int,int)"
});
formatter.result({
  "duration": 152494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "12345678",
      "offset": 57
    },
    {
      "val": "user1",
      "offset": 76
    }
  ],
  "location": "StepDefinitions.failedToRenewBookRevoke(int,int,String)"
});
formatter.result({
  "duration": 226371,
  "status": "passed"
});
formatter.after({
  "duration": 6161775,
  "status": "passed"
});
formatter.after({
  "duration": 41877,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/ReturnTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Return Test Cases",
  "description": "",
  "id": "return-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 144592,
  "status": "passed"
});
formatter.before({
  "duration": 5170961,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3079110,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv18 Return book",
  "description": "",
  "id": "return-test-cases;tv18-return-book",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2360888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1288296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 4427455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5590516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 69926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 596938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 78617,
  "status": "passed"
});
formatter.after({
  "duration": 3241085,
  "status": "passed"
});
formatter.after({
  "duration": 28840,
  "status": "passed"
});
formatter.before({
  "duration": 30815,
  "status": "passed"
});
formatter.before({
  "duration": 4917726,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2836937,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Tv19 Return book but fee added and user privilege not revoked",
  "description": "",
  "id": "return-test-cases;tv19-return-book-but-fee-added-and-user-privilege-not-revoked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678 late",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\" but fee was applied",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1343999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1566814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1611061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5633973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 72296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBookLate(String,int,int)"
});
formatter.result({
  "duration": 2148344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturnLateFee(int,int,String)"
});
formatter.result({
  "duration": 109827,
  "status": "passed"
});
formatter.after({
  "duration": 2780839,
  "status": "passed"
});
formatter.after({
  "duration": 37530,
  "status": "passed"
});
formatter.before({
  "duration": 99555,
  "status": "passed"
});
formatter.before({
  "duration": 3525530,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 5950418,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Tv20 Return book but fee added and user privilege revoked",
  "description": "",
  "id": "return-test-cases;tv20-return-book-but-fee-added-and-user-privilege-revoked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678 overdue",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\" but privileges were revoked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1634765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1415111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1669135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 7316540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 65580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBookOverdue(String,int,int)"
});
formatter.result({
  "duration": 1933431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturnLateRevoke(int,int,String)"
});
formatter.result({
  "duration": 56889,
  "status": "passed"
});
formatter.after({
  "duration": 2721974,
  "status": "passed"
});
formatter.after({
  "duration": 20938,
  "status": "passed"
});
formatter.before({
  "duration": 46617,
  "status": "passed"
});
formatter.before({
  "duration": 4163949,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 4734418,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Ti24 Return book returned book",
  "description": "",
  "id": "return-test-cases;ti24-return-book-returned-book",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "System failed to return loan of copy 1 of book with ISBN: 12345678 for user \"user1\" because loan does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 3925727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1399703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1687308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 4544788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 71507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 802766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 76641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    },
    {
      "val": "user1",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.failedToReturnBook(int,int,String)"
});
formatter.result({
  "duration": 39111,
  "status": "passed"
});
formatter.after({
  "duration": 2463604,
  "status": "passed"
});
formatter.after({
  "duration": 22518,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/TitleTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Title Test Cases",
  "description": "",
  "id": "title-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 138272,
  "status": "passed"
});
formatter.before({
  "duration": 4397036,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3844344,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv3 Add Title",
  "description": "",
  "id": "title-test-cases;tv3-add-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Attempting to add book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System successfully added book: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 24
    },
    {
      "val": "12345678",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.addBook(String,int)"
});
formatter.result({
  "duration": 3018271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.successfullyAddedBook(int)"
});
formatter.result({
  "duration": 80197,
  "status": "passed"
});
formatter.after({
  "duration": 3016690,
  "status": "passed"
});
formatter.after({
  "duration": 28840,
  "status": "passed"
});
formatter.before({
  "duration": 28444,
  "status": "passed"
});
formatter.before({
  "duration": 4808690,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3444147,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Tv4 Add Title",
  "description": "",
  "id": "title-test-cases;tv4-add-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "System successfully removed book: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Attempting to add book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "System successfully added book: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 5064294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 585086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.successfullyRemovedBook(int)"
});
formatter.result({
  "duration": 59259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 24
    },
    {
      "val": "12345678",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.addBook(String,int)"
});
formatter.result({
  "duration": 1806222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.successfullyAddedBook(int)"
});
formatter.result({
  "duration": 55309,
  "status": "passed"
});
formatter.after({
  "duration": 3951011,
  "status": "passed"
});
formatter.after({
  "duration": 27654,
  "status": "passed"
});
formatter.before({
  "duration": 117729,
  "status": "passed"
});
formatter.before({
  "duration": 9685330,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3227653,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tv10 Remove title. No copies involved",
  "description": "",
  "id": "title-test-cases;tv10-remove-title.-no-copies-involved",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Attempting to remove book \"title1\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "System successfully removed book: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1697579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 524642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.successfullyRemovedBook(int)"
});
formatter.result({
  "duration": 56493,
  "status": "passed"
});
formatter.after({
  "duration": 3722665,
  "status": "passed"
});
formatter.after({
  "duration": 28050,
  "status": "passed"
});
formatter.before({
  "duration": 114963,
  "status": "passed"
});
formatter.before({
  "duration": 5386269,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 13187946,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Tv12 Remove Title",
  "description": "",
  "id": "title-test-cases;tv12-remove-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "System successfully removed copy 1 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Attempting to remove book \"title1\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "System successfully removed book: 12345678",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1742617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1676246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title1",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1670715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 7357626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 104691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 1205333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 103506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 2026270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 66765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 568889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.successfullyRemovedBook(int)"
});
formatter.result({
  "duration": 44247,
  "status": "passed"
});
formatter.after({
  "duration": 3128493,
  "status": "passed"
});
formatter.after({
  "duration": 54123,
  "status": "passed"
});
formatter.before({
  "duration": 33580,
  "status": "passed"
});
formatter.before({
  "duration": 5197430,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3272690,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Ti3 Add Redundant Title",
  "description": "",
  "id": "title-test-cases;ti3-add-redundant-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Attempting to add book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "System failed to add book \"title\" with ISBN: 12345678 because it already exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2089481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 24
    },
    {
      "val": "12345678",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.addBook(String,int)"
});
formatter.result({
  "duration": 105481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.failedToAddBook(String,int)"
});
formatter.result({
  "duration": 86123,
  "status": "passed"
});
formatter.after({
  "duration": 3482863,
  "status": "passed"
});
formatter.after({
  "duration": 41876,
  "status": "passed"
});
formatter.before({
  "duration": 64790,
  "status": "passed"
});
formatter.before({
  "duration": 7914268,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3256493,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Ti12 Remove title that still has a copy",
  "description": "",
  "id": "title-test-cases;ti12-remove-title-that-still-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "System failed to remove book: 12345678 because copies exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1658074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1621332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 118123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.failedToRemoveBookCopies(int)"
});
formatter.result({
  "duration": 60445,
  "status": "passed"
});
formatter.after({
  "duration": 4524640,
  "status": "passed"
});
formatter.after({
  "duration": 41087,
  "status": "passed"
});
formatter.before({
  "duration": 97580,
  "status": "passed"
});
formatter.before({
  "duration": 6377479,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3133628,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Ti13 Remove title that has borrowed copy",
  "description": "",
  "id": "title-test-cases;ti13-remove-title-that-has-borrowed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "System failed to remove book with ISBN: 12345678 because book is currently loaned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2262913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2160592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1675061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 6086714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 75061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 78222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.failedToRemoveBookLoan(int)"
});
formatter.result({
  "duration": 55309,
  "status": "passed"
});
formatter.after({
  "duration": 3837628,
  "status": "passed"
});
formatter.after({
  "duration": 31605,
  "status": "passed"
});
formatter.before({
  "duration": 1616987,
  "status": "passed"
});
formatter.before({
  "duration": 5239306,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2882369,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Ti14 Remove title that has a copy",
  "description": "",
  "id": "title-test-cases;ti14-remove-title-that-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Copy 2 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "System failed to remove book: 12345678 because copies exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 38378257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 2482962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1539555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 1315160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1322666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 51753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.failedToRemoveBookCopies(int)"
});
formatter.result({
  "duration": 91655,
  "status": "passed"
});
formatter.after({
  "duration": 2992592,
  "status": "passed"
});
formatter.after({
  "duration": 27259,
  "status": "passed"
});
formatter.before({
  "duration": 29235,
  "status": "passed"
});
formatter.before({
  "duration": 4744295,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3036838,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Ti20 Remove non-existent title",
  "description": "",
  "id": "title-test-cases;ti20-remove-non-existent-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "No such book exists with ISBN: 12345678",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "System failed to remove book: 12345678 because book does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.noSuchBookExists(int)"
});
formatter.result({
  "duration": 110222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 66371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.failedToRemoveBook(int)"
});
formatter.result({
  "duration": 26074,
  "status": "passed"
});
formatter.after({
  "duration": 2169283,
  "status": "passed"
});
formatter.after({
  "duration": 22519,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/UseCaseDependencies.feature");
formatter.feature({
  "line": 1,
  "name": "Use Case Dependencies",
  "description": "",
  "id": "use-case-dependencies",
  "keyword": "Feature"
});
formatter.before({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 3708048,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "S4",
  "description": "",
  "id": "use-case-dependencies;s4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Attempting to add book \"title3\" with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "System successfully added book: 34567812",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Attempting to add book \"title1\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System successfully added book: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Attempting to add copy 1 to book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System successfully added copy 1 to book with ISBN: 34567812",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Attempting to create user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "System successfully added user: \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "System successfully added copy 1 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Attempting to create user: \"user2\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "System successfully added user: \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Attempting to add book \"title2\" with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "System successfully added book: 23456781",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Attempting to add copy 1 to book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "System successfully added copy 1 to book with ISBN: 23456781",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Attempting to add copy 2 to book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "System successfully added copy 2 to book with ISBN: 34567812",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "System successfully removed copy 1 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "System successfully borrowed copy 1 of book with ISBN 23456781 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Attempting to add copy 2 to book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "System successfully added copy 2 to book with ISBN: 23456781",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Attempting to remove copy 1 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "System successfully removed copy 1 of book with ISBN: 34567812",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "System successfully returned copy 1 of book with ISBN 23456781 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "System successfully borrowed copy 2 of book with ISBN 34567812 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Attempting to remove copy 2 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "System successfully removed copy 2 of book with ISBN: 23456781",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Attempting to remove book \"title1\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "System successfully removed book: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Attempting to remove copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "System successfully removed copy 1 of book with ISBN: 23456781",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "System successfully removed user: \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User \"user2\" attempts to return copy 2 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "System successfully returned copy 2 of book with ISBN 34567812 from user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Attempting to remove user: \"user2\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "System successfully removed user: \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Attempting to remove copy 2 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "System successfully removed copy 2 of book with ISBN: 34567812",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Attempting to remove book \"title2\" with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "System successfully removed book: 23456781",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Attempting to remove book \"title3\" with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "System successfully removed book: 34567812",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "title3",
      "offset": 24
    },
    {
      "val": "34567812",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.addBook(String,int)"
});
formatter.result({
  "duration": 1553777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34567812",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.successfullyAddedBook(int)"
});
formatter.result({
  "duration": 37926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 24
    },
    {
      "val": "12345678",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.addBook(String,int)"
});
formatter.result({
  "duration": 1368494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.successfullyAddedBook(int)"
});
formatter.result({
  "duration": 150519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "34567812",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1755259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "34567812",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 58074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.addUser(String)"
});
formatter.result({
  "duration": 1382321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.successfullyAddedUser(String)"
});
formatter.result({
  "duration": 43852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1377580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 41086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "12345678",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1113678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "12345678",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 59654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.addUser(String)"
});
formatter.result({
  "duration": 1509530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.successfullyAddedUser(String)"
});
formatter.result({
  "duration": 34371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 24
    },
    {
      "val": "23456781",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.addBook(String,int)"
});
formatter.result({
  "duration": 6766615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23456781",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.successfullyAddedBook(int)"
});
formatter.result({
  "duration": 40297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "23456781",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1499653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "23456781",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 86519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "34567812",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1320691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "34567812",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 41086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1426962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 59259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "23456781",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5082072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "23456781",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 71506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "23456781",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.addCopy(int,int)"
});
formatter.result({
  "duration": 1589333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "23456781",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.successfullyAddedCopy(int,int)"
});
formatter.result({
  "duration": 35951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "34567812",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1736296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "34567812",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 37925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "23456781",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 482765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "23456781",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 36346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "34567812",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 3952196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "34567812",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 51753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "12345678",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1473185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 49382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "23456781",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1613037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "23456781",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 49382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 27
    },
    {
      "val": "12345678",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 2255801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.successfullyRemovedBook(int)"
});
formatter.result({
  "duration": 47407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "23456781",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1266172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "23456781",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 43457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 1767900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.successfullyRemovedUser(String)"
});
formatter.result({
  "duration": 41481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "34567812",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 404938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "34567812",
      "offset": 54
    },
    {
      "val": "user2",
      "offset": 74
    }
  ],
  "location": "StepDefinitions.successfulReturn(int,int,String)"
});
formatter.result({
  "duration": 29235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 1566420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.successfullyRemovedUser(String)"
});
formatter.result({
  "duration": 22913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "34567812",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 1478320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "34567812",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.successfullyRemovedCopy(int,int)"
});
formatter.result({
  "duration": 41481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 27
    },
    {
      "val": "23456781",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 1421432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23456781",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.successfullyRemovedBook(int)"
});
formatter.result({
  "duration": 41877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title3",
      "offset": 27
    },
    {
      "val": "34567812",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.removeBook(String,int)"
});
formatter.result({
  "duration": 412049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34567812",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.successfullyRemovedBook(int)"
});
formatter.result({
  "duration": 24889,
  "status": "passed"
});
formatter.after({
  "duration": 4885726,
  "status": "passed"
});
formatter.after({
  "duration": 29234,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/UserTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "User Test Cases",
  "description": "",
  "id": "user-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 41481,
  "status": "passed"
});
formatter.before({
  "duration": 4148936,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2892641,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv1 Add User",
  "description": "",
  "id": "user-test-cases;tv1-add-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Attempting to create user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System successfully added user: \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.addUser(String)"
});
formatter.result({
  "duration": 1608691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.successfullyAddedUser(String)"
});
formatter.result({
  "duration": 35160,
  "status": "passed"
});
formatter.after({
  "duration": 3106764,
  "status": "passed"
});
formatter.after({
  "duration": 25284,
  "status": "passed"
});
formatter.before({
  "duration": 28049,
  "status": "passed"
});
formatter.before({
  "duration": 4803159,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2888295,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Tv2 Add User",
  "description": "",
  "id": "user-test-cases;tv2-add-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "System successfully removed user: \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Attempting to create user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "System successfully added user: \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 1982814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 6053529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.successfullyRemovedUser(String)"
});
formatter.result({
  "duration": 32790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.addUser(String)"
});
formatter.result({
  "duration": 1363753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.successfullyAddedUser(String)"
});
formatter.result({
  "duration": 26074,
  "status": "passed"
});
formatter.after({
  "duration": 2931357,
  "status": "passed"
});
formatter.after({
  "duration": 40692,
  "status": "passed"
});
formatter.before({
  "duration": 25679,
  "status": "passed"
});
formatter.before({
  "duration": 3452048,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2603851,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tv11 Remove User",
  "description": "",
  "id": "user-test-cases;tv11-remove-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "System successfully removed user: \"user1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 5755257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 1788444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.successfullyRemovedUser(String)"
});
formatter.result({
  "duration": 36346,
  "status": "passed"
});
formatter.after({
  "duration": 4564541,
  "status": "passed"
});
formatter.after({
  "duration": 25679,
  "status": "passed"
});
formatter.before({
  "duration": 31605,
  "status": "passed"
});
formatter.before({
  "duration": 3708048,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3172739,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Ti1 Add Redundant User",
  "description": "",
  "id": "user-test-cases;ti1-add-redundant-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Attempting to create user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "System failed to add user: \"user1\" because it already exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 2144394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.addUser(String)"
});
formatter.result({
  "duration": 75457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.failedToAddUser(String)"
});
formatter.result({
  "duration": 74667,
  "status": "passed"
});
formatter.after({
  "duration": 5771060,
  "status": "passed"
});
formatter.after({
  "duration": 228346,
  "status": "passed"
});
formatter.before({
  "duration": 57679,
  "status": "passed"
});
formatter.before({
  "duration": 6611751,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 3396739,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Ti15 Remove Non-existent User",
  "description": "",
  "id": "user-test-cases;ti15-remove-non-existent-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "System failed to remove user: \"user1\" that does not exist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 56099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.failedToRemoveUser(String)"
});
formatter.result({
  "duration": 32790,
  "status": "passed"
});
formatter.after({
  "duration": 2874073,
  "status": "passed"
});
formatter.after({
  "duration": 24889,
  "status": "passed"
});
formatter.before({
  "duration": 25679,
  "status": "passed"
});
formatter.before({
  "duration": 4693727,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 2773728,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Ti18 Remove user whose privileges are revoked",
  "description": "",
  "id": "user-test-cases;ti18-remove-user-whose-privileges-are-revoked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User \"user1\" has their privileges are revoked",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "System failed to remove user: \"user1\" because their privileges are revoked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 3223308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.privilegeRevoked(String)"
});
formatter.result({
  "duration": 4009479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 78222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.failedToRemoveUserRevoke(String)"
});
formatter.result({
  "duration": 36346,
  "status": "passed"
});
formatter.after({
  "duration": 3353677,
  "status": "passed"
});
formatter.after({
  "duration": 133926,
  "status": "passed"
});
formatter.before({
  "duration": 93630,
  "status": "passed"
});
formatter.before({
  "duration": 5280788,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that each test should be independent from one another",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.background()"
});
formatter.result({
  "duration": 5866269,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Ti19 Remove user whose has loans",
  "description": "",
  "id": "user-test-cases;ti19-remove-user-whose-has-loans",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "System failed to remove user: \"user1\" because they have existing loans",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userExists(String)"
});
formatter.result({
  "duration": 6540639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 6
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.bookExists(String,int)"
});
formatter.result({
  "duration": 1711802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.copyExists(int,String,int)"
});
formatter.result({
  "duration": 6120294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    },
    {
      "val": "1",
      "offset": 37
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 9031502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "12345678",
      "offset": 54
    },
    {
      "val": "user1",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.successfulBorrow(int,int,String)"
});
formatter.result({
  "duration": 55309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.removeUser(String)"
});
formatter.result({
  "duration": 80198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.failedToRemoveUserLoan(String)"
});
formatter.result({
  "duration": 32395,
  "status": "passed"
});
formatter.after({
  "duration": 3394369,
  "status": "passed"
});
formatter.after({
  "duration": 32395,
  "status": "passed"
});
});