$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/java/com/comp4004/test/cucumber/InvalidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid Paths",
  "description": "",
  "id": "invalid-paths",
  "keyword": "Feature"
});
formatter.before({
  "duration": 429827,
  "status": "passed"
});
formatter.before({
  "duration": 307587586,
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
  "duration": 118266328,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Ti1 Add Redundant User",
  "description": "",
  "id": "invalid-paths;ti1-add-redundant-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Attempting to create user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "duration": 652202684,
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
  "duration": 167506,
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
  "duration": 158420,
  "status": "passed"
});
formatter.after({
  "duration": 3531848,
  "status": "passed"
});
formatter.after({
  "duration": 50173,
  "status": "passed"
});
formatter.before({
  "duration": 70716,
  "status": "passed"
});
formatter.before({
  "duration": 4812241,
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
  "duration": 3393576,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Ti2 Add Item to non-existent title",
  "description": "",
  "id": "invalid-paths;ti2-add-item-to-non-existent-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "No such book exists with ISBN: 12345678",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 16,
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
  "duration": 912197,
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
  "duration": 281283,
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
  "duration": 185679,
  "status": "passed"
});
formatter.after({
  "duration": 2776490,
  "status": "passed"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.before({
  "duration": 72692,
  "status": "passed"
});
formatter.before({
  "duration": 4457871,
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
  "duration": 2861034,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Ti3 Add Redundant Title",
  "description": "",
  "id": "invalid-paths;ti3-add-redundant-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Attempting to add book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 22,
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
  "duration": 13656873,
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
  "duration": 222025,
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
  "duration": 231901,
  "status": "passed"
});
formatter.after({
  "duration": 10004531,
  "status": "passed"
});
formatter.after({
  "duration": 409283,
  "status": "passed"
});
formatter.before({
  "duration": 63209,
  "status": "passed"
});
formatter.before({
  "duration": 6649672,
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
  "duration": 4893624,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Ti4 Borrow same copy",
  "description": "",
  "id": "invalid-paths;ti4-borrow-same-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
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
  "line": 32,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 33,
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
  "duration": 3541724,
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
  "duration": 7853818,
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
  "duration": 1384690,
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
  "duration": 7045127,
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
  "duration": 19162842,
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
  "duration": 233087,
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
  "duration": 334221,
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
  "duration": 110222,
  "status": "passed"
});
formatter.after({
  "duration": 3382515,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 192395,
  "status": "passed"
});
formatter.before({
  "duration": 4645920,
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
  "duration": 4154464,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Ti5 Borrow renewed copy",
  "description": "",
  "id": "invalid-paths;ti5-borrow-renewed-copy",
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
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 48,
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
  "duration": 2292936,
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
  "duration": 3745971,
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
  "duration": 1554961,
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
  "duration": 1839010,
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
  "duration": 6645721,
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
  "duration": 180543,
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
  "duration": 10187444,
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
  "duration": 145778,
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
  "duration": 175408,
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
  "duration": 261926,
  "status": "passed"
});
formatter.after({
  "duration": 3966020,
  "status": "passed"
});
formatter.after({
  "duration": 39901,
  "status": "passed"
});
formatter.before({
  "duration": 367802,
  "status": "passed"
});
formatter.before({
  "duration": 9081668,
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
  "duration": 3086219,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Ti6 Borrow returned copy taken by other user",
  "description": "",
  "id": "invalid-paths;ti6-borrow-returned-copy-taken-by-other-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 66,
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
  "duration": 1869035,
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
  "duration": 4054118,
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
  "duration": 4289970,
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
  "duration": 1861134,
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
  "duration": 5242068,
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
  "duration": 152099,
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
  "duration": 2174417,
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
  "duration": 154469,
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
  "duration": 4995945,
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
  "duration": 129580,
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
  "duration": 963160,
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
  "duration": 107456,
  "status": "passed"
});
formatter.after({
  "duration": 3608094,
  "status": "passed"
});
formatter.after({
  "duration": 1784097,
  "status": "passed"
});
formatter.before({
  "duration": 473679,
  "status": "passed"
});
formatter.before({
  "duration": 8695298,
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
  "duration": 5281179,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Ti7 Borrow over max limit",
  "description": "",
  "id": "invalid-paths;ti7-borrow-over-max-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Copy 1 of book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Copy 1 of book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "System successfully borrowed copy 1 of book with ISBN 23456781 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 83,
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
  "duration": 3708045,
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
  "duration": 7565818,
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
  "duration": 8531742,
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
  "duration": 4706365,
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
  "duration": 6799400,
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
  "duration": 8969471,
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
  "duration": 11035641,
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
  "duration": 7598213,
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
  "duration": 258370,
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
  "duration": 5099056,
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
  "duration": 124445,
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
  "duration": 128395,
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
  "duration": 81778,
  "status": "passed"
});
formatter.after({
  "duration": 3256490,
  "status": "passed"
});
formatter.after({
  "duration": 48197,
  "status": "passed"
});
formatter.before({
  "duration": 69926,
  "status": "passed"
});
formatter.before({
  "duration": 6377474,
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
  "duration": 3182218,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Ti8 Borrow over max limit after return",
  "description": "",
  "id": "invalid-paths;ti8-borrow-over-max-limit-after-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 86,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Copy 1 of book \"title2\" with ISBN 23456781 exists",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Copy 1 of book \"title3\" with ISBN 34567812 exists",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "System successfully borrowed copy 1 of book with ISBN 23456781 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "System successfully returned copy 1 of book with ISBN 23456781 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 34567812",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "System successfully borrowed copy 1 of book with ISBN 34567812 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 23456781",
  "keyword": "When "
});
formatter.step({
  "line": 106,
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
  "duration": 6546165,
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
  "duration": 21390987,
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
  "duration": 4633674,
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
  "duration": 1628838,
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
  "duration": 2435553,
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
  "duration": 3973526,
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
  "duration": 1844146,
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
  "duration": 5291451,
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
  "duration": 108247,
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
  "duration": 4820932,
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
  "duration": 236642,
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
  "duration": 1696788,
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
      "val": "34567812",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 10870505,
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
  "duration": 99555,
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
  "duration": 242962,
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
  "duration": 68741,
  "status": "passed"
});
formatter.after({
  "duration": 2615700,
  "status": "passed"
});
formatter.after({
  "duration": 31210,
  "status": "passed"
});
formatter.before({
  "duration": 40296,
  "status": "passed"
});
formatter.before({
  "duration": 3692638,
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
  "duration": 3752292,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Ti9 Remove Non-existent Item",
  "description": "",
  "id": "invalid-paths;ti9-remove-non-existent-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 109,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 113,
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
  "duration": 4601278,
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
  "duration": 5487796,
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
  "duration": 190815,
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
  "duration": 100346,
  "status": "passed"
});
formatter.after({
  "duration": 4954068,
  "status": "passed"
});
formatter.after({
  "duration": 177777,
  "status": "passed"
});
formatter.before({
  "duration": 494617,
  "status": "passed"
});
formatter.before({
  "duration": 4867155,
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
  "duration": 3593873,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Ti10 Remove Borrowed Item",
  "description": "",
  "id": "invalid-paths;ti10-remove-borrowed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 116,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 124,
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
  "duration": 1398912,
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
  "duration": 1191900,
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
  "duration": 1392196,
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
  "duration": 7482856,
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
  "duration": 305383,
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
  "duration": 220445,
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
  "duration": 108642,
  "status": "passed"
});
formatter.after({
  "duration": 3143503,
  "status": "passed"
});
formatter.after({
  "duration": 37531,
  "status": "passed"
});
formatter.before({
  "duration": 122864,
  "status": "passed"
});
formatter.before({
  "duration": 6191005,
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
  "duration": 5196241,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Ti11 Remove borrowed/renewed item",
  "description": "",
  "id": "invalid-paths;ti11-remove-borrowed/renewed-item",
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
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 129,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 138,
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
  "duration": 3565428,
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
  "duration": 1712196,
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
  "duration": 1976886,
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
  "duration": 7766114,
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
  "duration": 143408,
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
  "duration": 8335003,
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
  "duration": 120494,
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
  "duration": 144197,
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
  "duration": 76247,
  "status": "passed"
});
formatter.after({
  "duration": 3412539,
  "status": "passed"
});
formatter.after({
  "duration": 34766,
  "status": "passed"
});
formatter.before({
  "duration": 67950,
  "status": "passed"
});
formatter.before({
  "duration": 4938661,
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
  "duration": 4970266,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Ti12 Remove title that still has a copy",
  "description": "",
  "id": "invalid-paths;ti12-remove-title-that-still-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 141,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 145,
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
  "duration": 2600293,
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
  "duration": 1686516,
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
  "duration": 195161,
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
  "duration": 75457,
  "status": "passed"
});
formatter.after({
  "duration": 3418465,
  "status": "passed"
});
formatter.after({
  "duration": 226765,
  "status": "passed"
});
formatter.before({
  "duration": 44642,
  "status": "passed"
});
formatter.before({
  "duration": 4587451,
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
  "duration": 2979947,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "Ti13 Remove title that has borrowed copy",
  "description": "",
  "id": "invalid-paths;ti13-remove-title-that-has-borrowed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 148,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 149,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 156,
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
  "duration": 1769084,
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
  "duration": 1516245,
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
  "duration": 4017378,
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
  "duration": 9421816,
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
  "duration": 579950,
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
  "duration": 164741,
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
  "duration": 80988,
  "status": "passed"
});
formatter.after({
  "duration": 3126514,
  "status": "passed"
});
formatter.after({
  "duration": 72691,
  "status": "passed"
});
formatter.before({
  "duration": 118913,
  "status": "passed"
});
formatter.before({
  "duration": 4052934,
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
  "duration": 3754267,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Ti14 Remove title that has a copy",
  "description": "",
  "id": "invalid-paths;ti14-remove-title-that-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 159,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 161,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "Copy 2 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 168,
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
  "duration": 26720758,
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
  "duration": 3722662,
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
  "duration": 4740340,
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
  "duration": 11979443,
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
  "duration": 2380639,
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
  "duration": 124445,
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
  "duration": 521481,
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
  "duration": 426666,
  "status": "passed"
});
formatter.after({
  "duration": 3568983,
  "status": "passed"
});
formatter.after({
  "duration": 41876,
  "status": "passed"
});
formatter.before({
  "duration": 143013,
  "status": "passed"
});
formatter.before({
  "duration": 4362267,
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
  "duration": 3305083,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Ti15 Remove Non-existent User",
  "description": "",
  "id": "invalid-paths;ti15-remove-non-existent-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 171,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 172,
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
  "duration": 142617,
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
  "duration": 65581,
  "status": "passed"
});
formatter.after({
  "duration": 6087104,
  "status": "passed"
});
formatter.after({
  "duration": 37135,
  "status": "passed"
});
formatter.before({
  "duration": 549925,
  "status": "passed"
});
formatter.before({
  "duration": 6887893,
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
  "duration": 3662218,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "Ti16 Renew Returned Item",
  "description": "",
  "id": "invalid-paths;ti16-renew-returned-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 175,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "Copy 1 of book \"title\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 186,
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
  "duration": 1884047,
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
  "duration": 3620736,
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
  "duration": 2054714,
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
  "duration": 7827349,
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
  "duration": 141432,
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
  "duration": 707555,
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
  "duration": 111012,
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
  "duration": 191604,
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
  "duration": 169876,
  "status": "passed"
});
formatter.after({
  "duration": 11048283,
  "status": "passed"
});
formatter.after({
  "duration": 350419,
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
  "duration": 159209,
  "status": "passed"
});
formatter.before({
  "duration": 7211448,
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
  "duration": 8256386,
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
  "duration": 100346,
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
  "duration": 7635349,
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
  "duration": 131555,
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
  "duration": 9894309,
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
  "duration": 123654,
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
  "duration": 1609874,
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
  "duration": 50173,
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
  "duration": 5078118,
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
  "duration": 77037,
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
  "duration": 17087585,
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
  "duration": 109828,
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
  "duration": 2326121,
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
  "duration": 68345,
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
  "duration": 5348340,
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
  "duration": 65185,
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
  "duration": 4360291,
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
  "duration": 109432,
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
  "duration": 8064781,
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
  "duration": 107061,
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
  "duration": 7855793,
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
  "duration": 188444,
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
  "duration": 10048778,
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
  "duration": 116148,
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
  "duration": 4544389,
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
  "duration": 96000,
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
  "duration": 8278904,
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
  "duration": 97580,
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
  "duration": 779456,
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
  "duration": 127605,
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
  "duration": 5839795,
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
  "duration": 135902,
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
  "duration": 6805720,
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
  "duration": 81382,
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
  "duration": 9220335,
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
  "duration": 189630,
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
  "duration": 6883152,
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
  "duration": 80197,
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
  "duration": 7456386,
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
  "duration": 79407,
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
  "duration": 5349919,
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
  "duration": 64395,
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
  "duration": 761283,
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
  "duration": 124839,
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
  "duration": 6087104,
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
  "duration": 43061,
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
  "duration": 5557722,
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
  "duration": 105876,
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
  "duration": 1880886,
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
  "duration": 64790,
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
  "duration": 1272097,
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
  "duration": 64000,
  "status": "passed"
});
formatter.after({
  "duration": 3045923,
  "status": "passed"
});
formatter.after({
  "duration": 46222,
  "status": "passed"
});
formatter.uri("main/java/com/comp4004/test/cucumber/ValidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Valid Paths",
  "description": "",
  "id": "valid-paths",
  "keyword": "Feature"
});
formatter.before({
  "duration": 64395,
  "status": "passed"
});
formatter.before({
  "duration": 4302217,
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
  "duration": 2903700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tv1 Add User",
  "description": "",
  "id": "valid-paths;tv1-add-user",
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
  "duration": 2021134,
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
  "duration": 54913,
  "status": "passed"
});
formatter.after({
  "duration": 3015108,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 32395,
  "status": "passed"
});
formatter.before({
  "duration": 3823798,
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
  "duration": 2996144,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Tv2 Add User",
  "description": "",
  "id": "valid-paths;tv2-add-user",
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
  "duration": 1566813,
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
  "duration": 6643350,
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
  "duration": 55703,
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
  "duration": 5079698,
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
  "duration": 55308,
  "status": "passed"
});
formatter.after({
  "duration": 2994959,
  "status": "passed"
});
formatter.after({
  "duration": 31605,
  "status": "passed"
});
formatter.before({
  "duration": 118914,
  "status": "passed"
});
formatter.before({
  "duration": 4028440,
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
  "duration": 8276138,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tv3 Add Title",
  "description": "",
  "id": "valid-paths;tv3-add-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Attempting to add book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 21,
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
  "duration": 9460137,
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
  "duration": 156840,
  "status": "passed"
});
formatter.after({
  "duration": 2857873,
  "status": "passed"
});
formatter.after({
  "duration": 90074,
  "status": "passed"
});
formatter.before({
  "duration": 111012,
  "status": "passed"
});
formatter.before({
  "duration": 18905657,
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
  "duration": 9295001,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Tv4 Add Title",
  "description": "",
  "id": "valid-paths;tv4-add-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Attempting to remove book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "System successfully removed book: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Attempting to add book \"title\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 30,
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
  "duration": 9909717,
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
  "duration": 1002270,
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
  "duration": 107852,
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
  "duration": 9711791,
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
  "duration": 77432,
  "status": "passed"
});
formatter.after({
  "duration": 3093725,
  "status": "passed"
});
formatter.after({
  "duration": 62420,
  "status": "passed"
});
formatter.before({
  "duration": 41481,
  "status": "passed"
});
formatter.before({
  "duration": 5776586,
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
  "duration": 3090564,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Tv5 Add Item",
  "description": "",
  "id": "valid-paths;tv5-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 36,
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
  "duration": 14330847,
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
  "duration": 5714167,
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
  "duration": 85333,
  "status": "passed"
});
formatter.after({
  "duration": 3548441,
  "status": "passed"
});
formatter.after({
  "duration": 33185,
  "status": "passed"
});
formatter.before({
  "duration": 227160,
  "status": "passed"
});
formatter.before({
  "duration": 8787743,
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
  "duration": 3479700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Tv6 Add Item",
  "description": "",
  "id": "valid-paths;tv6-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "System successfully added copy 1 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Attempting to add copy 3 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 48,
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
  "duration": 2090665,
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
  "duration": 1624097,
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
  "duration": 90864,
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
  "duration": 1565232,
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
  "duration": 67555,
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
  "duration": 6095400,
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
  "duration": 67556,
  "status": "passed"
});
formatter.after({
  "duration": 2413430,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 177382,
  "status": "passed"
});
formatter.before({
  "duration": 3557526,
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
  "duration": 2769775,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Tv7 Add Item",
  "description": "",
  "id": "valid-paths;tv7-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "Book \"title\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "Attempting to add copy 1 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "System successfully added copy 1 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Attempting to add copy 3 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "System successfully added copy 3 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Attempting to add copy 2 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "System successfully added copy 2 to book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Attempting to add copy 4 to book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 66,
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
  "duration": 1419850,
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
  "duration": 1501233,
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
  "duration": 85334,
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
  "duration": 2000985,
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
  "duration": 88493,
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
  "duration": 1751702,
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
  "duration": 91654,
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
  "duration": 4065576,
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
  "duration": 96790,
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
  "duration": 2606219,
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
  "duration": 64790,
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
  "duration": 5206512,
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
  "duration": 68346,
  "status": "passed"
});
formatter.after({
  "duration": 2661923,
  "status": "passed"
});
formatter.after({
  "duration": 24889,
  "status": "passed"
});
formatter.before({
  "duration": 1152394,
  "status": "passed"
});
formatter.before({
  "duration": 3743205,
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
  "duration": 2646121,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Tv8 Borrow",
  "description": "",
  "id": "valid-paths;tv8-borrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Copy 3 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Copy 3 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "User \"user1\" attempts to borrow copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "System successfully borrowed copy 3 of book with ISBN 87654321 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "System successfully borrowed copy 2 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 88,
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
  "duration": 2212343,
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
  "duration": 1594863,
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
  "duration": 1400097,
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
  "duration": 5999795,
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
  "duration": 3966415,
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
  "duration": 4372933,
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
  "duration": 3987749,
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
  "duration": 4113378,
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
  "duration": 4712685,
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
  "duration": 4128786,
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
  "duration": 3948637,
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
  "duration": 331852,
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
  "duration": 4100735,
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
  "duration": 92049,
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
  "duration": 4711500,
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
  "duration": 70716,
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
  "duration": 3914662,
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
  "duration": 200691,
  "status": "passed"
});
formatter.after({
  "duration": 2383010,
  "status": "passed"
});
formatter.after({
  "duration": 22123,
  "status": "passed"
});
formatter.before({
  "duration": 36346,
  "status": "passed"
});
formatter.before({
  "duration": 5127895,
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
  "duration": 3544489,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Tv9 Remove Item",
  "description": "",
  "id": "valid-paths;tv9-remove-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Copy 3 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Copy 3 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Attempting to remove copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "System successfully removed copy 2 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "Attempting to remove copy 1 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "System successfully removed copy 1 of book with ISBN: 87654321",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "Attempting to remove copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 106,
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
  "duration": 12143393,
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
  "duration": 1773430,
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
  "duration": 4250069,
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
  "duration": 5628833,
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
  "duration": 1815306,
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
  "duration": 2207997,
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
  "duration": 1554961,
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
  "duration": 1555751,
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
  "duration": 8264682,
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
  "duration": 78223,
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
  "duration": 6135301,
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
  "duration": 164346,
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
  "duration": 5403648,
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
  "duration": 74272,
  "status": "passed"
});
formatter.after({
  "duration": 3139947,
  "status": "passed"
});
formatter.after({
  "duration": 23704,
  "status": "passed"
});
formatter.before({
  "duration": 128000,
  "status": "passed"
});
formatter.before({
  "duration": 3942711,
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
  "duration": 3201576,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Tv10 Remove title. No copies involved",
  "description": "",
  "id": "valid-paths;tv10-remove-title.-no-copies-involved",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 109,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "Attempting to remove book \"title1\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 112,
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
  "duration": 2216689,
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
  "duration": 673184,
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
formatter.after({
  "duration": 3068441,
  "status": "passed"
});
formatter.after({
  "duration": 43062,
  "status": "passed"
});
formatter.before({
  "duration": 96000,
  "status": "passed"
});
formatter.before({
  "duration": 4491452,
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
  "duration": 3079503,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Tv11 Remove User",
  "description": "",
  "id": "valid-paths;tv11-remove-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "Attempting to remove user: \"user1\"",
  "keyword": "When "
});
formatter.step({
  "line": 118,
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
  "duration": 4471698,
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
  "duration": 3202367,
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
  "duration": 43062,
  "status": "passed"
});
formatter.after({
  "duration": 3191305,
  "status": "passed"
});
formatter.after({
  "duration": 48592,
  "status": "passed"
});
formatter.before({
  "duration": 30025,
  "status": "passed"
});
formatter.before({
  "duration": 3866465,
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
  "duration": 6716437,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Tv12 Remove Title",
  "description": "",
  "id": "valid-paths;tv12-remove-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 121,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "Attempting to remove copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "System successfully removed copy 1 of book with ISBN: 12345678",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "Attempting to remove book \"title1\" with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 135,
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
  "duration": 1771454,
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
  "duration": 1193480,
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
  "duration": 10287395,
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
  "duration": 4358711,
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
  "duration": 56099,
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
  "duration": 511604,
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
  "duration": 60049,
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
  "duration": 1099851,
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
  "duration": 48987,
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
  "duration": 803555,
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
  "duration": 80593,
  "status": "passed"
});
formatter.after({
  "duration": 2851157,
  "status": "passed"
});
formatter.after({
  "duration": 21333,
  "status": "passed"
});
formatter.before({
  "duration": 28050,
  "status": "passed"
});
formatter.before({
  "duration": 3970760,
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
  "duration": 3804439,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "Tv13 Renew Loan",
  "description": "",
  "id": "valid-paths;tv13-renew-loan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 138,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 146,
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
  "duration": 1508739,
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
  "duration": 1613035,
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
  "duration": 1131455,
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
  "duration": 4167501,
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
  "duration": 77432,
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
  "duration": 5551006,
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
  "duration": 188444,
  "status": "passed"
});
formatter.after({
  "duration": 3198811,
  "status": "passed"
});
formatter.after({
  "duration": 24098,
  "status": "passed"
});
formatter.before({
  "duration": 33975,
  "status": "passed"
});
formatter.before({
  "duration": 3877921,
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
  "duration": 3297181,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "Tv14 Renew Loan valid max times",
  "description": "",
  "id": "valid-paths;tv14-renew-loan-valid-max-times",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 149,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 160,
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
  "duration": 1477530,
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
  "duration": 1176887,
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
  "duration": 1655702,
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
  "duration": 4851352,
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
  "duration": 47408,
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
  "duration": 3902416,
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
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 494222,
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
  "duration": 45432,
  "status": "passed"
});
formatter.after({
  "duration": 2752392,
  "status": "passed"
});
formatter.after({
  "duration": 25679,
  "status": "passed"
});
formatter.before({
  "duration": 1793578,
  "status": "passed"
});
formatter.before({
  "duration": 5116834,
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
  "duration": 2726318,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "Tv15 Borrow",
  "description": "",
  "id": "valid-paths;tv15-borrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 163,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "User \"user2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "Copy 3 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "Copy 3 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "User \"user1\" attempts to borrow copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "System successfully borrowed copy 3 of book with ISBN 87654321 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "System successfully borrowed copy 2 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "User \"user2\" attempts to borrow copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "System successfully borrowed copy 2 of book with ISBN 87654321 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "User \"user1\" attempts to return copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "System successfully returned copy 1 of book with ISBN 12345678 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 186,
  "name": "User \"user1\" attempts to return copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "System successfully returned copy 3 of book with ISBN 87654321 from user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "User \"user2\" attempts to return copy 2 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "System successfully returned copy 2 of book with ISBN 12345678 from user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "User \"user2\" attempts to return copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "System successfully returned copy 2 of book with ISBN 87654321 from user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "User \"user2\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "User \"user2\" attempts to borrow copy 3 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 197,
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
  "duration": 1460541,
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
  "duration": 1563653,
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
  "duration": 1927899,
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
  "duration": 3572934,
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
  "duration": 4380834,
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
  "duration": 1870615,
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
  "duration": 1457381,
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
  "duration": 1663603,
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
  "duration": 1198221,
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
  "duration": 1394171,
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
  "duration": 5026760,
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
  "duration": 80592,
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
  "duration": 4952883,
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
  "duration": 49383,
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
  "duration": 4940241,
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
  "duration": 105086,
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
  "duration": 4903895,
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
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 5520191,
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
  "duration": 67556,
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
  "duration": 4114958,
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
  "duration": 54124,
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
  "duration": 3831304,
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
  "duration": 53729,
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
  "duration": 486320,
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
  "duration": 37531,
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
  "duration": 4045032,
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
  "duration": 48592,
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
  "duration": 4856488,
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
  "duration": 50173,
  "status": "passed"
});
formatter.after({
  "duration": 3619156,
  "status": "passed"
});
formatter.after({
  "duration": 43851,
  "status": "passed"
});
formatter.before({
  "duration": 37531,
  "status": "passed"
});
formatter.before({
  "duration": 4153675,
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
  "duration": 6200881,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "Tv16 Renew when full",
  "description": "",
  "id": "valid-paths;tv16-renew-when-full",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 200,
  "name": "User \"user1\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 201,
  "name": "Book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "Copy 1 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "Copy 2 of book \"title1\" with ISBN 12345678 exists",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "Copy 1 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "Copy 2 of book \"title2\" with ISBN 87654321 exists",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "User \"user1\" attempts to borrow copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 209,
  "name": "System successfully borrowed copy 1 of book with ISBN 12345678 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "User \"user1\" attempts to borrow copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "System successfully borrowed copy 2 of book with ISBN 87654321 to user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 213,
  "name": "User \"user1\" attempts to renew copy 1 of book with ISBN: 12345678",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "System successfully renewed copy 1 of book with ISBN 12345678 for user \"user1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "User \"user1\" attempts to renew copy 2 of book with ISBN: 87654321",
  "keyword": "When "
});
formatter.step({
  "line": 217,
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
  "duration": 1727998,
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
  "duration": 1567603,
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
  "duration": 15674451,
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
  "duration": 4199106,
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
  "duration": 2495207,
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
  "duration": 6309128,
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
  "duration": 5195451,
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
  "duration": 6494017,
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
  "duration": 4204242,
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
  "duration": 47407,
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
  "duration": 23316911,
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
  "duration": 66370,
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
  "duration": 5902216,
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
  "duration": 55309,
  "status": "passed"
});
formatter.after({
  "duration": 2896984,
  "status": "passed"
});
formatter.after({
  "duration": 24494,
  "status": "passed"
});
});