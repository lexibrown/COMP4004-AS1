$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/java/com/comp4004/test/cucumber/InvalidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid Paths",
  "description": "",
  "id": "invalid-paths",
  "keyword": "Feature"
});
formatter.before({
  "duration": 391505,
  "status": "passed"
});
formatter.before({
  "duration": 112352963,
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
  "duration": 103459351,
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
  "duration": 259693314,
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
  "duration": 269431,
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
  "duration": 185679,
  "status": "passed"
});
formatter.after({
  "duration": 5865469,
  "status": "passed"
});
formatter.after({
  "duration": 203061,
  "status": "passed"
});
formatter.before({
  "duration": 159605,
  "status": "passed"
});
formatter.before({
  "duration": 4898361,
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
  "duration": 3394759,
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
  "duration": 840295,
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
  "duration": 246123,
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
  "duration": 222419,
  "status": "passed"
});
formatter.after({
  "duration": 3942313,
  "status": "passed"
});
formatter.after({
  "duration": 197530,
  "status": "passed"
});
formatter.before({
  "duration": 73876,
  "status": "passed"
});
formatter.before({
  "duration": 11784668,
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
  "duration": 3063698,
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
  "duration": 13020419,
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
  "duration": 1165035,
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
  "duration": 233481,
  "status": "passed"
});
formatter.after({
  "duration": 14220219,
  "status": "passed"
});
formatter.after({
  "duration": 138272,
  "status": "passed"
});
formatter.before({
  "duration": 62025,
  "status": "passed"
});
formatter.before({
  "duration": 4080189,
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
  "duration": 9821215,
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
  "duration": 5645816,
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
  "duration": 2970858,
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
  "duration": 4127202,
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
  "duration": 7559097,
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
  "duration": 12457062,
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
  "duration": 193975,
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
  "duration": 209382,
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
  "duration": 89284,
  "status": "passed"
});
formatter.after({
  "duration": 3313771,
  "status": "passed"
});
formatter.after({
  "duration": 41086,
  "status": "passed"
});
formatter.before({
  "duration": 109432,
  "status": "passed"
});
formatter.before({
  "duration": 4028831,
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
  "duration": 3126513,
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
  "duration": 1983996,
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
  "duration": 2788340,
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
  "duration": 1588145,
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
  "duration": 2035354,
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
  "duration": 5603149,
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
  "duration": 163160,
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
  "duration": 5969766,
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
  "duration": 115358,
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
  "duration": 150123,
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
  "duration": 105482,
  "status": "passed"
});
formatter.after({
  "duration": 4360682,
  "status": "passed"
});
formatter.after({
  "duration": 50962,
  "status": "passed"
});
formatter.before({
  "duration": 90864,
  "status": "passed"
});
formatter.before({
  "duration": 4169869,
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
  "duration": 3048290,
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
  "duration": 2319403,
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
  "duration": 2335600,
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
  "duration": 1482268,
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
  "duration": 2220638,
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
  "duration": 5733915,
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
  "duration": 138666,
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
  "duration": 1610663,
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
  "duration": 4661719,
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
  "duration": 1003850,
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
  "duration": 811851,
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
  "duration": 130370,
  "status": "passed"
});
formatter.after({
  "duration": 4105078,
  "status": "passed"
});
formatter.after({
  "duration": 195950,
  "status": "passed"
});
formatter.before({
  "duration": 69136,
  "status": "passed"
});
formatter.before({
  "duration": 5588927,
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
  "duration": 3920189,
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
  "duration": 1760391,
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
  "duration": 1727997,
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
  "duration": 2751995,
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
  "duration": 1959503,
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
  "duration": 2689970,
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
  "duration": 1699947,
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
  "duration": 1502812,
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
  "duration": 6278704,
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
  "duration": 201086,
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
  "duration": 4714657,
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
  "duration": 160790,
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
  "duration": 201876,
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
  "duration": 93235,
  "status": "passed"
});
formatter.after({
  "duration": 3617178,
  "status": "passed"
});
formatter.after({
  "duration": 39901,
  "status": "passed"
});
formatter.before({
  "duration": 69531,
  "status": "passed"
});
formatter.before({
  "duration": 4221226,
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
  "duration": 3563450,
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
  "duration": 1871008,
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
  "duration": 1907354,
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
  "duration": 9340821,
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
  "duration": 1507553,
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
  "duration": 1561281,
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
  "duration": 2742514,
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
  "duration": 2015601,
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
  "duration": 5469619,
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
  "duration": 139456,
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
  "duration": 6022704,
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
  "duration": 111803,
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
  "duration": 1587750,
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
  "duration": 155259,
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
  "duration": 5888384,
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
  "duration": 89679,
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
  "duration": 102716,
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
  "duration": 54123,
  "status": "passed"
});
formatter.after({
  "duration": 4790509,
  "status": "passed"
});
formatter.after({
  "duration": 32790,
  "status": "passed"
});
formatter.before({
  "duration": 46617,
  "status": "passed"
});
formatter.before({
  "duration": 4981719,
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
  "duration": 3608092,
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
  "duration": 5408779,
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
  "duration": 3808783,
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
  "duration": 196345,
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
  "duration": 75457,
  "status": "passed"
});
formatter.after({
  "duration": 3115055,
  "status": "passed"
});
formatter.after({
  "duration": 44247,
  "status": "passed"
});
formatter.before({
  "duration": 76246,
  "status": "passed"
});
formatter.before({
  "duration": 5095101,
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
  "duration": 3251352,
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
  "duration": 11732125,
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
  "duration": 2175206,
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
  "duration": 1830317,
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
  "duration": 6706554,
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
  "duration": 269827,
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
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToRemoveCopyLoan(int,int)"
});
formatter.result({
  "duration": 118123,
  "status": "passed"
});
formatter.after({
  "duration": 3762560,
  "status": "passed"
});
formatter.after({
  "duration": 59260,
  "status": "passed"
});
formatter.before({
  "duration": 111407,
  "status": "passed"
});
formatter.before({
  "duration": 4337374,
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
  "duration": 3322067,
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
  "duration": 5247595,
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
  "duration": 6440679,
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
  "duration": 11952174,
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
  "duration": 20570428,
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
  "duration": 119308,
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
  "duration": 9125908,
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
  "duration": 113777,
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
  "duration": 197531,
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
  "duration": 84938,
  "status": "passed"
});
formatter.after({
  "duration": 10143980,
  "status": "passed"
});
formatter.after({
  "duration": 103901,
  "status": "passed"
});
formatter.before({
  "duration": 97975,
  "status": "passed"
});
formatter.before({
  "duration": 18829395,
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
  "duration": 5721667,
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
  "duration": 2185477,
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
  "duration": 2455304,
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
  "duration": 188839,
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
  "duration": 1544688,
  "status": "passed"
});
formatter.after({
  "duration": 8293119,
  "status": "passed"
});
formatter.after({
  "duration": 107061,
  "status": "passed"
});
formatter.before({
  "duration": 101926,
  "status": "passed"
});
formatter.before({
  "duration": 19032061,
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
  "duration": 6122655,
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
  "duration": 2975204,
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
  "duration": 2209576,
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
  "duration": 3484043,
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
  "duration": 8551094,
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
  "duration": 138272,
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
  "duration": 147752,
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
  "duration": 78617,
  "status": "passed"
});
formatter.after({
  "duration": 5793174,
  "status": "passed"
});
formatter.after({
  "duration": 36345,
  "status": "passed"
});
formatter.before({
  "duration": 169086,
  "status": "passed"
});
formatter.before({
  "duration": 6026655,
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
  "duration": 19605690,
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
  "duration": 6874851,
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
  "duration": 2166909,
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
  "duration": 1843749,
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
  "duration": 4994755,
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
  "duration": 2448587,
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
  "duration": 123259,
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
  "duration": 166321,
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
  "duration": 89284,
  "status": "passed"
});
formatter.after({
  "duration": 3939548,
  "status": "passed"
});
formatter.after({
  "duration": 40692,
  "status": "passed"
});
formatter.before({
  "duration": 207802,
  "status": "passed"
});
formatter.before({
  "duration": 3945078,
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
  "duration": 2976785,
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
  "duration": 137481,
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
  "duration": 67555,
  "status": "passed"
});
formatter.after({
  "duration": 3480882,
  "status": "passed"
});
formatter.after({
  "duration": 97975,
  "status": "passed"
});
formatter.before({
  "duration": 550319,
  "status": "passed"
});
formatter.before({
  "duration": 4436930,
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
  "duration": 4597324,
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
  "duration": 1887601,
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
  "duration": 4560584,
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
  "duration": 5855594,
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
  "duration": 11730545,
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
  "duration": 149333,
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
  "duration": 730863,
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
  "duration": 109037,
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
  "duration": 148938,
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
  "duration": 118518,
  "status": "passed"
});
formatter.after({
  "duration": 3439006,
  "status": "passed"
});
formatter.after({
  "duration": 382815,
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
  "duration": 157234,
  "status": "passed"
});
formatter.before({
  "duration": 3576091,
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
  "duration": 2984290,
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
  "duration": 95605,
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
  "duration": 10494004,
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
  "duration": 76247,
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
  "duration": 1761577,
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
  "duration": 109827,
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
  "duration": 1703898,
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
  "duration": 62419,
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
  "duration": 1646614,
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
  "duration": 103901,
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
  "duration": 1821626,
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
  "duration": 92840,
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
  "duration": 1734318,
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
  "duration": 52544,
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
  "duration": 2061033,
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
  "duration": 109037,
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
  "duration": 4188436,
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
  "duration": 106271,
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
  "duration": 8757316,
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
  "duration": 109431,
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
  "duration": 19072753,
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
  "duration": 137481,
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
  "duration": 6179938,
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
  "duration": 111012,
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
  "duration": 6576579,
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
      "val": "34567812",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.removeCopy(int,int)"
});
formatter.result({
  "duration": 2396044,
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
  "duration": 96790,
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
  "duration": 684245,
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
  "duration": 121679,
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
  "duration": 41389350,
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
  "duration": 112592,
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
  "duration": 4969077,
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
  "duration": 96394,
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
  "duration": 1791996,
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
  "duration": 73876,
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
  "duration": 2030613,
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
  "duration": 74271,
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
  "duration": 2043256,
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
  "duration": 92049,
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
  "duration": 2588439,
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
  "duration": 64790,
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
  "duration": 624592,
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
  "duration": 108642,
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
  "duration": 8019342,
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
  "duration": 57283,
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
  "duration": 1803453,
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
  "duration": 93629,
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
  "duration": 2648488,
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
  "duration": 87308,
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
  "duration": 863208,
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
  "duration": 87308,
  "status": "passed"
});
formatter.after({
  "duration": 6329667,
  "status": "passed"
});
formatter.after({
  "duration": 122469,
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
  "duration": 130370,
  "status": "passed"
});
formatter.before({
  "duration": 10353757,
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
  "duration": 7624677,
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
  "duration": 3853029,
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
  "duration": 59655,
  "status": "passed"
});
formatter.after({
  "duration": 3554759,
  "status": "passed"
});
formatter.after({
  "duration": 31210,
  "status": "passed"
});
formatter.before({
  "duration": 33580,
  "status": "passed"
});
formatter.before({
  "duration": 3630216,
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
  "duration": 2757130,
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
  "duration": 10350202,
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
  "duration": 5165422,
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
  "duration": 56889,
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
  "duration": 5146459,
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
  "duration": 56099,
  "status": "passed"
});
formatter.after({
  "duration": 3837623,
  "status": "passed"
});
formatter.after({
  "duration": 30420,
  "status": "passed"
});
formatter.before({
  "duration": 93235,
  "status": "passed"
});
formatter.before({
  "duration": 20819712,
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
  "duration": 2951895,
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
  "duration": 1912095,
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
  "duration": 76642,
  "status": "passed"
});
formatter.after({
  "duration": 3062117,
  "status": "passed"
});
formatter.after({
  "duration": 29234,
  "status": "passed"
});
formatter.before({
  "duration": 28444,
  "status": "passed"
});
formatter.before({
  "duration": 4277325,
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
  "duration": 2875253,
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
  "duration": 2102120,
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
  "duration": 4364239,
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
  "duration": 167506,
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
  "duration": 7128480,
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
  "duration": 91654,
  "status": "passed"
});
formatter.after({
  "duration": 3626264,
  "status": "passed"
});
formatter.after({
  "duration": 32395,
  "status": "passed"
});
formatter.before({
  "duration": 54518,
  "status": "passed"
});
formatter.before({
  "duration": 3817474,
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
  "duration": 4348436,
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
  "duration": 3277425,
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
  "duration": 1980441,
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
  "duration": 122864,
  "status": "passed"
});
formatter.after({
  "duration": 3188537,
  "status": "passed"
});
formatter.after({
  "duration": 47803,
  "status": "passed"
});
formatter.before({
  "duration": 48593,
  "status": "passed"
});
formatter.before({
  "duration": 8376873,
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
  "duration": 6819147,
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
  "duration": 1828342,
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
  "duration": 1719701,
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
  "duration": 83358,
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
  "duration": 1605527,
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
  "duration": 103111,
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
  "duration": 4238609,
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
  "duration": 94024,
  "status": "passed"
});
formatter.after({
  "duration": 3584783,
  "status": "passed"
});
formatter.after({
  "duration": 32395,
  "status": "passed"
});
formatter.before({
  "duration": 34370,
  "status": "passed"
});
formatter.before({
  "duration": 4507250,
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
  "duration": 3487203,
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
  "duration": 1910120,
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
  "duration": 2304786,
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
  "duration": 95209,
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
  "duration": 3004043,
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
  "duration": 114568,
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
  "duration": 28063944,
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
  "duration": 87704,
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
  "duration": 6595147,
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
  "duration": 69530,
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
  "duration": 1918021,
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
  "duration": 79012,
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
  "duration": 2171255,
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
  "duration": 86913,
  "status": "passed"
});
formatter.after({
  "duration": 2936093,
  "status": "passed"
});
formatter.after({
  "duration": 52148,
  "status": "passed"
});
formatter.before({
  "duration": 108642,
  "status": "passed"
});
formatter.before({
  "duration": 3642066,
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
  "duration": 3301524,
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
  "duration": 2603847,
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
  "duration": 4165127,
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
  "duration": 1688886,
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
  "duration": 6576974,
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
  "duration": 1404442,
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
  "duration": 4897571,
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
  "duration": 5385076,
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
  "duration": 4781818,
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
  "duration": 4901521,
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
  "duration": 1351898,
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
  "duration": 4322757,
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
  "duration": 351209,
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
  "duration": 4453917,
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
  "duration": 98370,
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
  "duration": 5965420,
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
  "duration": 94024,
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
  "duration": 6022705,
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
  "duration": 111407,
  "status": "passed"
});
formatter.after({
  "duration": 3276636,
  "status": "passed"
});
formatter.after({
  "duration": 27259,
  "status": "passed"
});
formatter.before({
  "duration": 341333,
  "status": "passed"
});
formatter.before({
  "duration": 3858561,
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
  "duration": 3052636,
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
  "duration": 2720390,
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
  "duration": 2215897,
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
  "duration": 3890560,
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
  "duration": 3081476,
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
  "duration": 1946465,
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
  "duration": 1808984,
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
  "duration": 2381822,
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
  "duration": 2147947,
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
  "duration": 1620540,
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
  "duration": 89679,
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
  "duration": 1454219,
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
  "duration": 105086,
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
  "duration": 5034656,
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
  "duration": 178173,
  "status": "passed"
});
formatter.after({
  "duration": 4651842,
  "status": "passed"
});
formatter.after({
  "duration": 31210,
  "status": "passed"
});
formatter.before({
  "duration": 47012,
  "status": "passed"
});
formatter.before({
  "duration": 8553859,
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
  "duration": 3047895,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Tv10 Remove title (No copies involved)",
  "description": "",
  "id": "valid-paths;tv10-remove-title-(no-copies-involved)",
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
  "duration": 1565627,
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
  "duration": 589036,
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
  "duration": 49383,
  "status": "passed"
});
formatter.after({
  "duration": 3189327,
  "status": "passed"
});
formatter.after({
  "duration": 29234,
  "status": "passed"
});
formatter.before({
  "duration": 33185,
  "status": "passed"
});
formatter.before({
  "duration": 3766116,
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
  "duration": 2803747,
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
  "duration": 1925132,
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
  "duration": 2488884,
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
  "duration": 44247,
  "status": "passed"
});
formatter.after({
  "duration": 6243543,
  "status": "passed"
});
formatter.after({
  "duration": 52148,
  "status": "passed"
});
formatter.before({
  "duration": 31605,
  "status": "passed"
});
formatter.before({
  "duration": 3961276,
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
  "duration": 3045920,
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
  "duration": 1935799,
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
  "duration": 1997823,
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
  "duration": 1564047,
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
  "duration": 4822904,
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
  "duration": 74271,
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
  "duration": 609974,
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
  "duration": 62815,
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
  "duration": 1405232,
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
  "duration": 53729,
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
  "duration": 597332,
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
  "duration": 46617,
  "status": "passed"
});
formatter.after({
  "duration": 3301920,
  "status": "passed"
});
formatter.after({
  "duration": 30420,
  "status": "passed"
});
formatter.before({
  "duration": 88098,
  "status": "passed"
});
formatter.before({
  "duration": 3815104,
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
  "duration": 3412142,
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
  "duration": 1513874,
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
  "duration": 1556936,
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
  "duration": 2290959,
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
  "duration": 7511294,
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
  "duration": 137876,
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
  "duration": 7809960,
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
  "duration": 204247,
  "status": "passed"
});
formatter.after({
  "duration": 3805622,
  "status": "passed"
});
formatter.after({
  "duration": 31210,
  "status": "passed"
});
formatter.before({
  "duration": 93235,
  "status": "passed"
});
formatter.before({
  "duration": 9122352,
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
  "duration": 2962562,
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
  "duration": 1786861,
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
  "duration": 1729577,
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
  "duration": 2847995,
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
  "duration": 6045223,
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
  "duration": 72691,
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
  "duration": 4905867,
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
  "duration": 597332,
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
  "duration": 74667,
  "status": "passed"
});
formatter.after({
  "duration": 3226067,
  "status": "passed"
});
formatter.after({
  "duration": 30419,
  "status": "passed"
});
formatter.before({
  "duration": 45036,
  "status": "passed"
});
formatter.before({
  "duration": 8325119,
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
  "duration": 3625079,
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
  "duration": 16481548,
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
  "duration": 9130648,
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
  "duration": 1911305,
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
  "duration": 1822021,
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
  "duration": 1806218,
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
  "duration": 1534811,
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
  "duration": 1741429,
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
  "duration": 1822416,
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
  "duration": 1503997,
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
  "duration": 1788046,
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
  "duration": 4830016,
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
  "duration": 73086,
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
  "duration": 5141323,
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
  "duration": 75852,
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
  "duration": 5813321,
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
  "duration": 129975,
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
  "duration": 5951198,
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
  "duration": 70716,
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
  "duration": 5995049,
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
  "duration": 5741816,
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
  "duration": 80592,
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
  "duration": 6593567,
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
  "duration": 78222,
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
  "duration": 695702,
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
  "duration": 182518,
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
  "duration": 7286504,
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
  "duration": 69925,
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
  "duration": 18322137,
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
  "duration": 71506,
  "status": "passed"
});
formatter.after({
  "duration": 4895200,
  "status": "passed"
});
formatter.after({
  "duration": 34370,
  "status": "passed"
});
formatter.before({
  "duration": 37531,
  "status": "passed"
});
formatter.before({
  "duration": 4057671,
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
  "duration": 2841279,
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
  "duration": 2791500,
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
  "duration": 2320983,
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
  "duration": 2559600,
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
  "duration": 1632786,
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
  "duration": 2008490,
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
  "duration": 7230800,
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
  "duration": 1718910,
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
  "duration": 7772825,
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
  "duration": 75062,
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
  "duration": 7893317,
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
  "duration": 63605,
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
  "duration": 7064875,
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
  "duration": 79802,
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
  "duration": 6900924,
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
  "duration": 72691,
  "status": "passed"
});
formatter.after({
  "duration": 3762956,
  "status": "passed"
});
formatter.after({
  "duration": 37135,
  "status": "passed"
});
});