$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/java/com/comp4004/test/cucumber/InvalidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid Paths",
  "description": "",
  "id": "invalid-paths",
  "keyword": "Feature"
});
formatter.before({
  "duration": 208592,
  "status": "passed"
});
formatter.before({
  "duration": 85938398,
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
  "duration": 97378178,
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
  "duration": 219263961,
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
  "duration": 144593,
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
  "duration": 130370,
  "status": "passed"
});
formatter.after({
  "duration": 3043550,
  "status": "passed"
});
formatter.after({
  "duration": 53728,
  "status": "passed"
});
formatter.before({
  "duration": 66370,
  "status": "passed"
});
formatter.before({
  "duration": 4327893,
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
  "duration": 3467055,
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
  "duration": 759307,
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
  "duration": 293530,
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
  "duration": 196741,
  "status": "passed"
});
formatter.after({
  "duration": 3151401,
  "status": "passed"
});
formatter.after({
  "duration": 62419,
  "status": "passed"
});
formatter.before({
  "duration": 79407,
  "status": "passed"
});
formatter.before({
  "duration": 5054409,
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
  "duration": 3098463,
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
  "duration": 3968388,
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
  "duration": 140642,
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
  "duration": 173827,
  "status": "passed"
});
formatter.after({
  "duration": 4090461,
  "status": "passed"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.before({
  "duration": 124444,
  "status": "passed"
});
formatter.before({
  "duration": 3885819,
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
  "duration": 3120982,
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
  "duration": 6618851,
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
  "duration": 6770554,
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
  "duration": 2173626,
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
  "duration": 9598006,
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
  "duration": 12581111,
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
  "duration": 152889,
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
  "duration": 246123,
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
  "duration": 115753,
  "status": "passed"
});
formatter.after({
  "duration": 3019846,
  "status": "passed"
});
formatter.after({
  "duration": 40297,
  "status": "passed"
});
formatter.before({
  "duration": 173431,
  "status": "passed"
});
formatter.before({
  "duration": 4228732,
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
  "duration": 3028142,
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
  "duration": 1948836,
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
  "duration": 1780144,
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
  "duration": 2374317,
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
  "duration": 1856392,
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
  "duration": 6356925,
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
  "duration": 122863,
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
  "duration": 5052040,
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
  "duration": 130765,
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
  "duration": 195950,
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
  "duration": 99555,
  "status": "passed"
});
formatter.after({
  "duration": 2963353,
  "status": "passed"
});
formatter.after({
  "duration": 39901,
  "status": "passed"
});
formatter.before({
  "duration": 99556,
  "status": "passed"
});
formatter.before({
  "duration": 5047298,
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
  "duration": 3105574,
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
  "duration": 1783306,
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
  "duration": 1677034,
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
  "duration": 1711404,
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
  "duration": 1637922,
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
  "duration": 5024780,
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
  "duration": 127210,
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
  "duration": 1161479,
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
  "duration": 134321,
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
  "duration": 4455892,
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
  "duration": 113382,
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
  "duration": 753381,
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
  "duration": 408493,
  "status": "passed"
});
formatter.after({
  "duration": 3449672,
  "status": "passed"
});
formatter.after({
  "duration": 140246,
  "status": "passed"
});
formatter.before({
  "duration": 156049,
  "status": "passed"
});
formatter.before({
  "duration": 4726904,
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
  "duration": 3280981,
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
  "duration": 1869824,
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
  "duration": 1419059,
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
  "duration": 2635847,
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
  "duration": 2053527,
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
  "duration": 2867352,
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
  "duration": 1603947,
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
  "duration": 1510713,
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
  "duration": 6382604,
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
  "duration": 133530,
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
  "duration": 4911792,
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
  "duration": 102321,
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
  "duration": 142222,
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
  "duration": 102715,
  "status": "passed"
});
formatter.after({
  "duration": 3065278,
  "status": "passed"
});
formatter.after({
  "duration": 35161,
  "status": "passed"
});
formatter.before({
  "duration": 54518,
  "status": "passed"
});
formatter.before({
  "duration": 3882264,
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
  "duration": 3435845,
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
  "duration": 1935009,
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
  "duration": 1759206,
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
  "duration": 1826762,
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
  "duration": 2192589,
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
  "duration": 2051551,
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
  "duration": 4463399,
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
  "duration": 2957821,
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
  "duration": 5752877,
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
  "duration": 170271,
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
  "duration": 4773916,
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
  "duration": 94025,
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
  "duration": 1541923,
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
  "duration": 5033472,
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
  "duration": 116938,
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
  "duration": 139062,
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
  "duration": 88889,
  "status": "passed"
});
formatter.after({
  "duration": 2637032,
  "status": "passed"
});
formatter.after({
  "duration": 34370,
  "status": "passed"
});
formatter.before({
  "duration": 55309,
  "status": "passed"
});
formatter.before({
  "duration": 4503300,
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
  "duration": 14684810,
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
  "duration": 1829132,
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
  "duration": 2226958,
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
  "duration": 144197,
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
  "duration": 4772336,
  "status": "passed"
});
formatter.after({
  "duration": 51753,
  "status": "passed"
});
formatter.before({
  "duration": 163950,
  "status": "passed"
});
formatter.before({
  "duration": 4276930,
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
  "duration": 3516833,
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
  "duration": 1816095,
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
  "duration": 1659256,
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
  "duration": 1731552,
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
  "duration": 6180333,
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
  "duration": 146172,
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
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.failedToRemoveCopyLoan(int,int)"
});
formatter.result({
  "duration": 110222,
  "status": "passed"
});
formatter.after({
  "duration": 5995445,
  "status": "passed"
});
formatter.after({
  "duration": 119308,
  "status": "passed"
});
formatter.before({
  "duration": 81382,
  "status": "passed"
});
formatter.before({
  "duration": 19650727,
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
  "duration": 4729670,
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
  "duration": 2365230,
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
  "duration": 1983996,
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
  "duration": 2319402,
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
  "duration": 9212821,
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
  "duration": 139851,
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
  "duration": 14106441,
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
  "duration": 116938,
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
  "duration": 460246,
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
  "duration": 103901,
  "status": "passed"
});
formatter.after({
  "duration": 7098850,
  "status": "passed"
});
formatter.after({
  "duration": 158814,
  "status": "passed"
});
formatter.before({
  "duration": 89284,
  "status": "passed"
});
formatter.before({
  "duration": 12793653,
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
  "duration": 6143988,
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
  "duration": 3170759,
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
  "duration": 2349822,
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
  "duration": 443259,
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
  "duration": 77432,
  "status": "passed"
});
formatter.after({
  "duration": 5110509,
  "status": "passed"
});
formatter.after({
  "duration": 43851,
  "status": "passed"
});
formatter.before({
  "duration": 137481,
  "status": "passed"
});
formatter.before({
  "duration": 8354749,
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
  "duration": 6120679,
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
  "duration": 3666166,
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
  "duration": 2266070,
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
  "duration": 3105574,
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
  "duration": 5611445,
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
  "duration": 385975,
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
  "duration": 161185,
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
  "duration": 65186,
  "status": "passed"
});
formatter.after({
  "duration": 4492633,
  "status": "passed"
});
formatter.after({
  "duration": 156839,
  "status": "passed"
});
formatter.before({
  "duration": 129975,
  "status": "passed"
});
formatter.before({
  "duration": 17032657,
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
  "duration": 3266364,
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
  "duration": 5035052,
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
  "duration": 2352193,
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
  "duration": 1874169,
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
  "duration": 2289773,
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
  "duration": 1667552,
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
  "duration": 112988,
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
  "duration": 126814,
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
  "duration": 44247,
  "status": "passed"
});
formatter.after({
  "duration": 3272290,
  "status": "passed"
});
formatter.after({
  "duration": 31209,
  "status": "passed"
});
formatter.before({
  "duration": 97975,
  "status": "passed"
});
formatter.before({
  "duration": 4561374,
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
  "duration": 2890265,
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
  "duration": 139456,
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
  "duration": 49778,
  "status": "passed"
});
formatter.after({
  "duration": 3307056,
  "status": "passed"
});
formatter.after({
  "duration": 35555,
  "status": "passed"
});
formatter.before({
  "duration": 539258,
  "status": "passed"
});
formatter.before({
  "duration": 4152880,
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
  "duration": 3255302,
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
  "duration": 2190218,
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
  "duration": 1988737,
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
  "duration": 2298069,
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
  "duration": 6603838,
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
  "duration": 158814,
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
  "duration": 625381,
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
  "duration": 143802,
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
  "duration": 116938,
  "status": "passed"
});
formatter.after({
  "duration": 4670015,
  "status": "passed"
});
formatter.after({
  "duration": 263505,
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
  "duration": 119703,
  "status": "passed"
});
formatter.before({
  "duration": 3897672,
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
  "duration": 1481873,
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
  "duration": 96394,
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
  "duration": 4379251,
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
  "duration": 86124,
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
  "duration": 1771454,
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
  "duration": 101925,
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
  "duration": 1786070,
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
  "duration": 62025,
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
  "duration": 1366911,
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
  "duration": 77827,
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
  "duration": 1493726,
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
      "val": "user2",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.addUser(String)"
});
formatter.result({
  "duration": 1676638,
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
  "duration": 42272,
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
  "duration": 1610268,
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
  "duration": 62814,
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
  "duration": 1499651,
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
  "duration": 77432,
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
  "duration": 7824577,
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
  "duration": 111407,
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
  "duration": 11106743,
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
  "duration": 438123,
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
  "duration": 7363936,
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
  "duration": 92445,
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
  "duration": 1581429,
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
  "duration": 114173,
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
  "duration": 2776883,
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
  "duration": 95210,
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
  "duration": 964344,
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
  "duration": 113382,
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
  "duration": 6777666,
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
  "duration": 105481,
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
  "duration": 6528382,
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
  "duration": 85728,
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
  "duration": 1793182,
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
  "duration": 99556,
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
  "duration": 1842170,
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
  "duration": 85334,
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
  "duration": 5855989,
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
  "duration": 74272,
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
  "duration": 7038010,
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
  "duration": 61630,
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
  "duration": 818962,
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
  "duration": 105086,
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
  "duration": 2725525,
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
  "duration": 56099,
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
  "duration": 1776985,
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
  "duration": 92049,
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
  "duration": 1625675,
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
  "duration": 73086,
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
  "duration": 705579,
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
  "duration": 71111,
  "status": "passed"
});
formatter.after({
  "duration": 4128387,
  "status": "passed"
});
formatter.after({
  "duration": 155259,
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
  "duration": 203062,
  "status": "passed"
});
formatter.before({
  "duration": 4297077,
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
  "duration": 3220931,
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
  "duration": 9302500,
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
  "duration": 61630,
  "status": "passed"
});
formatter.after({
  "duration": 13369257,
  "status": "passed"
});
formatter.after({
  "duration": 542418,
  "status": "passed"
});
formatter.before({
  "duration": 459456,
  "status": "passed"
});
formatter.before({
  "duration": 12674740,
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
  "duration": 2732242,
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
  "duration": 2457279,
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
  "duration": 4305374,
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
  "duration": 53728,
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
  "duration": 4837126,
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
  "duration": 56494,
  "status": "passed"
});
formatter.after({
  "duration": 2956636,
  "status": "passed"
});
formatter.after({
  "duration": 30025,
  "status": "passed"
});
formatter.before({
  "duration": 123654,
  "status": "passed"
});
formatter.before({
  "duration": 3727400,
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
  "duration": 2872488,
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
  "duration": 2138465,
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
  "duration": 98370,
  "status": "passed"
});
formatter.after({
  "duration": 3098463,
  "status": "passed"
});
formatter.after({
  "duration": 106666,
  "status": "passed"
});
formatter.before({
  "duration": 89679,
  "status": "passed"
});
formatter.before({
  "duration": 20264256,
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
  "duration": 4884534,
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
  "duration": 10760275,
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
  "duration": 850961,
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
  "duration": 122074,
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
  "duration": 9634352,
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
  "duration": 71506,
  "status": "passed"
});
formatter.after({
  "duration": 3402265,
  "status": "passed"
});
formatter.after({
  "duration": 61630,
  "status": "passed"
});
formatter.before({
  "duration": 1927897,
  "status": "passed"
});
formatter.before({
  "duration": 7903985,
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
  "duration": 3786659,
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
  "duration": 1729972,
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
  "duration": 1900244,
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
formatter.after({
  "duration": 3116636,
  "status": "passed"
});
formatter.after({
  "duration": 35160,
  "status": "passed"
});
formatter.before({
  "duration": 135901,
  "status": "passed"
});
formatter.before({
  "duration": 3769277,
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
  "duration": 3073574,
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
  "duration": 1788836,
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
  "duration": 1729577,
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
  "duration": 90074,
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
  "duration": 1885626,
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
  "duration": 89284,
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
  "duration": 1643059,
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
  "duration": 96000,
  "status": "passed"
});
formatter.after({
  "duration": 2993772,
  "status": "passed"
});
formatter.after({
  "duration": 28049,
  "status": "passed"
});
formatter.before({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 5862704,
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
  "duration": 2633476,
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
  "duration": 2465180,
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
  "duration": 1826762,
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
  "duration": 86913,
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
  "duration": 3043155,
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
  "duration": 96395,
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
  "duration": 1647799,
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
  "duration": 2004540,
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
  "duration": 85729,
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
  "duration": 3010364,
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
  "duration": 89679,
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
  "duration": 2828636,
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
  "duration": 89284,
  "status": "passed"
});
formatter.after({
  "duration": 2947550,
  "status": "passed"
});
formatter.after({
  "duration": 41482,
  "status": "passed"
});
formatter.before({
  "duration": 121283,
  "status": "passed"
});
formatter.before({
  "duration": 3730166,
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
  "duration": 3117426,
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
  "duration": 2055107,
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
  "duration": 2236835,
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
  "duration": 3323648,
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
  "duration": 1709429,
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
  "duration": 2100539,
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
  "duration": 8551490,
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
  "duration": 7647985,
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
  "duration": 2823106,
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
  "duration": 1972935,
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
  "duration": 1778169,
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
  "duration": 7582405,
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
  "duration": 491061,
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
  "duration": 6302408,
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
  "duration": 129580,
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
  "duration": 6814407,
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
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 6758703,
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
  "duration": 121678,
  "status": "passed"
});
formatter.after({
  "duration": 5009372,
  "status": "passed"
});
formatter.after({
  "duration": 58074,
  "status": "passed"
});
formatter.before({
  "duration": 99950,
  "status": "passed"
});
formatter.before({
  "duration": 3806807,
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
  "duration": 3119796,
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
  "duration": 2813624,
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
  "duration": 2459650,
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
  "duration": 2313872,
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
  "duration": 12278495,
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
  "duration": 2251847,
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
  "duration": 2651649,
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
  "duration": 2806908,
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
  "duration": 2909624,
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
  "duration": 1858367,
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
  "duration": 80593,
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
  "duration": 2050761,
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
  "duration": 170271,
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
  "duration": 2114366,
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
  "duration": 98370,
  "status": "passed"
});
formatter.after({
  "duration": 3523154,
  "status": "passed"
});
formatter.after({
  "duration": 31210,
  "status": "passed"
});
formatter.before({
  "duration": 37926,
  "status": "passed"
});
formatter.before({
  "duration": 3740832,
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
  "duration": 3021821,
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
  "duration": 1884836,
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
  "duration": 1056788,
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
  "duration": 62025,
  "status": "passed"
});
formatter.after({
  "duration": 2921476,
  "status": "passed"
});
formatter.after({
  "duration": 30420,
  "status": "passed"
});
formatter.before({
  "duration": 31604,
  "status": "passed"
});
formatter.before({
  "duration": 3554759,
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
  "duration": 2975599,
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
  "duration": 2111206,
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
  "duration": 1965033,
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
  "duration": 46222,
  "status": "passed"
});
formatter.after({
  "duration": 6416185,
  "status": "passed"
});
formatter.after({
  "duration": 57679,
  "status": "passed"
});
formatter.before({
  "duration": 35555,
  "status": "passed"
});
formatter.before({
  "duration": 3669326,
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
  "duration": 2696291,
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
  "duration": 3164439,
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
  "duration": 2351008,
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
  "duration": 1604343,
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
  "duration": 6862604,
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
  "duration": 77036,
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
  "duration": 601677,
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
  "duration": 1513873,
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
  "duration": 75062,
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
  "duration": 573233,
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
  "duration": 62025,
  "status": "passed"
});
formatter.after({
  "duration": 2983500,
  "status": "passed"
});
formatter.after({
  "duration": 27654,
  "status": "passed"
});
formatter.before({
  "duration": 69531,
  "status": "passed"
});
formatter.before({
  "duration": 7470207,
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
  "duration": 2927796,
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
  "duration": 11328373,
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
  "duration": 4166313,
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
  "duration": 1915651,
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
  "duration": 6772530,
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
  "duration": 159605,
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
  "duration": 8412823,
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
  "duration": 205036,
  "status": "passed"
});
formatter.after({
  "duration": 3843153,
  "status": "passed"
});
formatter.after({
  "duration": 28049,
  "status": "passed"
});
formatter.before({
  "duration": 33975,
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
  "duration": 2885131,
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
  "duration": 2748439,
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
  "duration": 1660442,
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
  "duration": 2013626,
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
  "duration": 6701419,
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
  "duration": 9223488,
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
  "duration": 82172,
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
  "duration": 839504,
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
  "duration": 73481,
  "status": "passed"
});
formatter.after({
  "duration": 3632585,
  "status": "passed"
});
formatter.after({
  "duration": 29630,
  "status": "passed"
});
formatter.before({
  "duration": 190814,
  "status": "passed"
});
formatter.before({
  "duration": 4065572,
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
  "duration": 3863301,
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
  "duration": 9480278,
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
  "duration": 1682960,
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
  "duration": 3503400,
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
  "duration": 1873379,
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
  "duration": 3041574,
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
  "duration": 2622809,
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
  "duration": 2139650,
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
  "duration": 2123848,
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
  "duration": 1951601,
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
  "duration": 1770664,
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
  "duration": 6247494,
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
  "duration": 73876,
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
  "duration": 9722845,
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
  "duration": 5642260,
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
  "duration": 135901,
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
  "duration": 8374107,
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
  "duration": 67950,
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
  "duration": 5293422,
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
  "duration": 77827,
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
  "duration": 5887593,
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
  "duration": 76247,
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
  "duration": 5418260,
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
  "duration": 76246,
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
  "duration": 723752,
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
  "duration": 69531,
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
  "duration": 5870605,
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
  "duration": 66371,
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
  "duration": 5150410,
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
  "duration": 64395,
  "status": "passed"
});
formatter.after({
  "duration": 3224883,
  "status": "passed"
});
formatter.after({
  "duration": 28445,
  "status": "passed"
});
formatter.before({
  "duration": 30420,
  "status": "passed"
});
formatter.before({
  "duration": 3983794,
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
  "duration": 3347351,
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
  "duration": 1593281,
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
  "duration": 1519800,
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
  "duration": 1719305,
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
  "duration": 1663207,
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
  "duration": 1886812,
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
  "duration": 1444343,
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
  "duration": 1739058,
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
  "duration": 5138163,
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
  "duration": 51357,
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
  "duration": 4621028,
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
  "duration": 4845027,
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
  "duration": 64790,
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
  "duration": 4612732,
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
  "duration": 69531,
  "status": "passed"
});
formatter.after({
  "duration": 2821525,
  "status": "passed"
});
formatter.after({
  "duration": 26864,
  "status": "passed"
});
});