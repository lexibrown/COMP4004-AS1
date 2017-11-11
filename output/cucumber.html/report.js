$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/java/com/comp4004/test/cucumber/InvalidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid Paths",
  "description": "",
  "id": "invalid-paths",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1389430,
  "status": "passed"
});
formatter.before({
  "duration": 87449111,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 114581897,
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
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Attempting to add the new user \"antonio@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The system outputs \"The User Already Exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 13311183,
  "status": "passed"
});
formatter.after({
  "duration": 157234,
  "status": "passed"
});
formatter.before({
  "duration": 107062,
  "status": "passed"
});
formatter.before({
  "duration": 8006700,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3373030,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Ti2 Add Item to non-existent title",
  "description": "",
  "id": "invalid-paths;ti2-add-item-to-non-existent-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "No title exists with isbn \"1357924680123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Attempting to add copy 1 of item with isbn \"1357924680123\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The system outputs \"The Title Does Not Exist! Would you like to add it? (y/n)\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3770857,
  "status": "passed"
});
formatter.after({
  "duration": 58074,
  "status": "passed"
});
formatter.before({
  "duration": 207012,
  "status": "passed"
});
formatter.before({
  "duration": 9929462,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3857375,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Ti3 Add Redundant Title",
  "description": "",
  "id": "invalid-paths;ti3-add-redundant-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Title \"2001: A Space Odyssey\" with isbn \"2468013579123\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Attempting to add title \"2001: A Space Odyssey\" with isbn \"2468013579123\" again",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The system outputs \"Item added successfully!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3777178,
  "status": "passed"
});
formatter.after({
  "duration": 52148,
  "status": "passed"
});
formatter.before({
  "duration": 54519,
  "status": "passed"
});
formatter.before({
  "duration": 5296582,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3931251,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Ti4 Borrow same copy",
  "description": "",
  "id": "invalid-paths;ti4-borrow-same-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User \"alex@carleton.ca\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The system outputs \"Success!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User \"alex@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The system outputs \"Item Not Available!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 9136969,
  "status": "passed"
});
formatter.after({
  "duration": 131161,
  "status": "passed"
});
formatter.before({
  "duration": 51358,
  "status": "passed"
});
formatter.before({
  "duration": 4747447,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3494314,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Ti5 Borrow renewed copy",
  "description": "",
  "id": "invalid-paths;ti5-borrow-renewed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User \"alex@carleton.ca\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User \"antonio@carleton.ca\" renews copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User \"alex@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The system outputs \"Item Not Available!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3187747,
  "status": "passed"
});
formatter.after({
  "duration": 59259,
  "status": "passed"
});
formatter.before({
  "duration": 137086,
  "status": "passed"
});
formatter.before({
  "duration": 4348436,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 5899445,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Ti6 Borrow returned copy taken by other user",
  "description": "",
  "id": "invalid-paths;ti6-borrow-returned-copy-taken-by-other-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User \"alex@carleton.ca\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User \"antonio@carleton.ca\" attempts to return copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User \"alex@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "The system outputs \"Item Not Available!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3183006,
  "status": "passed"
});
formatter.after({
  "duration": 1491750,
  "status": "passed"
});
formatter.before({
  "duration": 190419,
  "status": "passed"
});
formatter.before({
  "duration": 5371249,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3576882,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Ti7 Borrow over max limit",
  "description": "",
  "id": "invalid-paths;ti7-borrow-over-max-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Title \"t2\" with isbn \"2468013579123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Title \"t3\" with isbn \"1357924680123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Attempting to add copy 1 of item with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Attempting to add copy 1 of item with isbn \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "The system outputs \"Maximum Borrowed Items Exceeded!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3770857,
  "status": "passed"
});
formatter.after({
  "duration": 39902,
  "status": "passed"
});
formatter.before({
  "duration": 47013,
  "status": "passed"
});
formatter.before({
  "duration": 6224186,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 4840682,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Ti8 Borrow over max limit after return",
  "description": "",
  "id": "invalid-paths;ti8-borrow-over-max-limit-after-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Title \"t2\" with isbn \"2468013579123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Title \"t3\" with isbn \"1357924680123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Attempting to add copy 1 of item with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Attempting to add copy 1 of item with isbn \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User \"antonio@carleton.ca\" attempts to return copy 0 of \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "The system outputs \"Success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "The system outputs \"Maximum Borrowed Items Exceeded\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3287697,
  "status": "passed"
});
formatter.after({
  "duration": 43852,
  "status": "passed"
});
formatter.before({
  "duration": 54518,
  "status": "passed"
});
formatter.before({
  "duration": 4708336,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3253327,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Ti9 Remove Non-existent Item",
  "description": "",
  "id": "invalid-paths;ti9-remove-non-existent-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 82,
  "name": "Title \"t1\" with isbn \"2121212121211\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "Attempting to add copy 1 of item with isbn \"2121212121211\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "Attempting to remove copy 2 of item with isbn \"2121212121211\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "The system outputs \"The Item Does Not Exist!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 5910112,
  "status": "passed"
});
formatter.after({
  "duration": 39902,
  "status": "passed"
});
formatter.before({
  "duration": 47803,
  "status": "passed"
});
formatter.before({
  "duration": 5367298,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 5674655,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Ti10 Remove Borrowed Item",
  "description": "",
  "id": "invalid-paths;ti10-remove-borrowed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Attempting to remove copy 0 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "The system outputs \"Outstanding Loan exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 8335391,
  "status": "passed"
});
formatter.after({
  "duration": 103902,
  "status": "passed"
});
formatter.before({
  "duration": 64395,
  "status": "passed"
});
formatter.before({
  "duration": 5175299,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 5624878,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Ti11 Remove borrowed/renewed item",
  "description": "",
  "id": "invalid-paths;ti11-remove-borrowed/renewed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "User \"antonio@carleton.ca\" renews copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Attempting to remove copy 0 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "The system outputs \"Outstanding Loan exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 5420631,
  "status": "passed"
});
formatter.after({
  "duration": 127210,
  "status": "passed"
});
formatter.before({
  "duration": 169876,
  "status": "passed"
});
formatter.before({
  "duration": 6527987,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 4284041,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Ti12 Remove title that still has a copy",
  "description": "",
  "id": "invalid-paths;ti12-remove-title-that-still-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 105,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Attempting to remove title \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "The system outputs \"Unable to delete title, more than 1 item instance exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 10194942,
  "status": "passed"
});
formatter.after({
  "duration": 39902,
  "status": "passed"
});
formatter.before({
  "duration": 43062,
  "status": "passed"
});
formatter.before({
  "duration": 9795536,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3467055,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Ti13 Remove title that has borrowed copy",
  "description": "",
  "id": "invalid-paths;ti13-remove-title-that-has-borrowed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 111,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "Attempting to remove title \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "The system outputs \"Outstanding Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 4259547,
  "status": "passed"
});
formatter.after({
  "duration": 41877,
  "status": "passed"
});
formatter.before({
  "duration": 53334,
  "status": "passed"
});
formatter.before({
  "duration": 7632972,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 7456775,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Ti14 Remove title that has a copy",
  "description": "",
  "id": "invalid-paths;ti14-remove-title-that-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Attempting to add copy 2 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Attempting to add copy 3 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Attempting to remove copy 1 of item with isbn \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "Attempting to remove title \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "The system outputs \"Unable to delete title, more than 1 item instance exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3495499,
  "status": "passed"
});
formatter.after({
  "duration": 41087,
  "status": "passed"
});
formatter.before({
  "duration": 132741,
  "status": "passed"
});
formatter.before({
  "duration": 5685717,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3894115,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Ti15 Remove Non-existent User",
  "description": "",
  "id": "invalid-paths;ti15-remove-non-existent-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 128,
  "name": "Attempting to remove user \"alex@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "The system outputs \"The User Does Not Exist!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3496685,
  "status": "passed"
});
formatter.after({
  "duration": 42666,
  "status": "passed"
});
formatter.before({
  "duration": 600098,
  "status": "passed"
});
formatter.before({
  "duration": 4479201,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3485228,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Ti16 Renew Returned Item",
  "description": "",
  "id": "invalid-paths;ti16-renew-returned-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 132,
  "name": "User \"antonio@carleton.ca\" is created",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "Title \"t1\" with isbn \"1234567890123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "User \"antonio@carleton.ca\" attempts to borrow copy 0 of \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "User \"antonio@carleton.ca\" attempts to return copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "User \"antonio@carleton.ca\" renews copy 0 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "The system outputs \"No Such Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3472981,
  "status": "passed"
});
formatter.after({
  "duration": 388740,
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
  "duration": 107852,
  "status": "passed"
});
formatter.before({
  "duration": 5815692,
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
  "name": "Title \"t3\" with isbn \"1234567890123\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title \"t1\" with isbn \"2468013579123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Attempting to add copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User \"Antonio@carleton.ca\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Attempting to add copy 1 of item with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Attempting to add copy 2 of item with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User \"Alex@carleton.ca\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Title \"t2\" with isbn \"1357924680123\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Attempting to add copy 1 of item with isbn \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Attempting to add copy 2 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Attempting to remove copy 0 of item with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User \"Antonio@carleton.ca\" attempts to borrow copy 1 of \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Attempting to remove copy 2 of item with isbn \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Attempting to remove copy 0 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User \"Antonio@carleton.ca\" attempts to return copy 1 of \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Attempting to remove copy 0 of \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Attempting to remove copy 1 of item with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Attempt to remove title with isbn \"2468013579123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Attempting to remove copy 1 of item with isbn \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Attempting to remove user \"Antonio@carleton.ca\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User \"Alex@carleton.ca\" attempts to return copy 1 of \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Attempting to remove user \"Alex@carleton.ca\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Attempting to remove copy 1 of item with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Attempt to remove title with isbn \"1357924680123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Attempt to remove title with isbn \"1234567890123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "The system outputs \"Success!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3965622,
  "status": "passed"
});
formatter.after({
  "duration": 42666,
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
  "duration": 39506,
  "status": "passed"
});
formatter.before({
  "duration": 3710412,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 2992982,
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
  "duration": 252048885,
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
  "duration": 1756046,
  "status": "passed"
});
formatter.after({
  "duration": 2951895,
  "status": "passed"
});
formatter.after({
  "duration": 28839,
  "status": "passed"
});
formatter.before({
  "duration": 47012,
  "status": "passed"
});
formatter.before({
  "duration": 4137473,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 5493718,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 2608982,
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
  "duration": 4079399,
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
  "duration": 107062,
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
  "duration": 2098564,
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
  "duration": 64790,
  "status": "passed"
});
formatter.after({
  "duration": 3168389,
  "status": "passed"
});
formatter.after({
  "duration": 30420,
  "status": "passed"
});
formatter.before({
  "duration": 105481,
  "status": "passed"
});
formatter.before({
  "duration": 33010503,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 12726099,
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
  "duration": 8272972,
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
  "duration": 130766,
  "status": "passed"
});
formatter.after({
  "duration": 5360187,
  "status": "passed"
});
formatter.after({
  "duration": 103901,
  "status": "passed"
});
formatter.before({
  "duration": 76642,
  "status": "passed"
});
formatter.before({
  "duration": 7206307,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3123747,
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
  "duration": 2718019,
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
  "duration": 976196,
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
  "duration": 108247,
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
  "duration": 3271499,
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
  "duration": 103111,
  "status": "passed"
});
formatter.after({
  "duration": 3314957,
  "status": "passed"
});
formatter.after({
  "duration": 123259,
  "status": "passed"
});
formatter.before({
  "duration": 134716,
  "status": "passed"
});
formatter.before({
  "duration": 66589894,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 4647497,
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
  "duration": 8841859,
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
  "duration": 3593869,
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
  "duration": 151308,
  "status": "passed"
});
formatter.after({
  "duration": 4615497,
  "status": "passed"
});
formatter.after({
  "duration": 29630,
  "status": "passed"
});
formatter.before({
  "duration": 33975,
  "status": "passed"
});
formatter.before({
  "duration": 4279300,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3243846,
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
  "duration": 15605302,
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
  "duration": 9772622,
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
  "duration": 118123,
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
  "duration": 1944095,
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
  "duration": 124445,
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
  "duration": 5050459,
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
  "duration": 115752,
  "status": "passed"
});
formatter.after({
  "duration": 3428734,
  "status": "passed"
});
formatter.after({
  "duration": 32790,
  "status": "passed"
});
formatter.before({
  "duration": 45827,
  "status": "passed"
});
formatter.before({
  "duration": 3956930,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3594660,
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
  "duration": 1802664,
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
  "duration": 1953576,
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
  "duration": 161580,
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
  "duration": 1810169,
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
  "duration": 118518,
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
  "duration": 5123150,
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
  "duration": 139852,
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
  "duration": 1840589,
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
  "duration": 131555,
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
  "duration": 2782809,
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
  "duration": 116938,
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
  "duration": 17215571,
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
  "duration": 342518,
  "status": "passed"
});
formatter.after({
  "duration": 3431894,
  "status": "passed"
});
formatter.after({
  "duration": 80592,
  "status": "passed"
});
formatter.before({
  "duration": 117333,
  "status": "passed"
});
formatter.before({
  "duration": 5859544,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3021031,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 3613623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 4377670,
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
  "duration": 2450563,
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
  "duration": 11866841,
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
  "duration": 2964142,
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
  "duration": 2392094,
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
  "duration": 10744472,
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
  "duration": 1785676,
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
  "duration": 7779936,
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
  "duration": 2702612,
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
  "duration": 20250034,
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
  "duration": 165530,
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
  "duration": 6743691,
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
  "duration": 131951,
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
  "duration": 6182309,
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
  "duration": 130766,
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
  "duration": 6582111,
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
  "duration": 155654,
  "status": "passed"
});
formatter.after({
  "duration": 19344949,
  "status": "passed"
});
formatter.after({
  "duration": 130370,
  "status": "passed"
});
formatter.before({
  "duration": 30025,
  "status": "passed"
});
formatter.before({
  "duration": 4541226,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 4777868,
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
  "duration": 14938834,
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
  "duration": 6524432,
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
  "duration": 3219747,
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
  "duration": 5274459,
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
  "duration": 1912885,
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
  "duration": 1961477,
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
  "duration": 2375106,
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
  "duration": 1945675,
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
  "duration": 2197329,
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
  "duration": 114567,
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
  "duration": 5791593,
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
  "duration": 103901,
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
  "duration": 2416193,
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
  "duration": 118518,
  "status": "passed"
});
formatter.after({
  "duration": 4232288,
  "status": "passed"
});
formatter.after({
  "duration": 105876,
  "status": "passed"
});
formatter.before({
  "duration": 70716,
  "status": "passed"
});
formatter.before({
  "duration": 4699250,
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
  "location": "StepDefinitions.independece()"
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
  "duration": 1729182,
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
  "duration": 598913,
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
  "duration": 72296,
  "status": "passed"
});
formatter.after({
  "duration": 2985871,
  "status": "passed"
});
formatter.after({
  "duration": 31605,
  "status": "passed"
});
formatter.before({
  "duration": 48987,
  "status": "passed"
});
formatter.before({
  "duration": 4344880,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 6016778,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 3894116,
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
  "duration": 2519304,
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
  "duration": 59259,
  "status": "passed"
});
formatter.after({
  "duration": 3366710,
  "status": "passed"
});
formatter.after({
  "duration": 33185,
  "status": "passed"
});
formatter.before({
  "duration": 58864,
  "status": "passed"
});
formatter.before({
  "duration": 11198397,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3602956,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 3056192,
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
  "duration": 2692340,
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
  "duration": 2251453,
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
  "duration": 12367383,
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
  "duration": 117728,
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
  "duration": 1833873,
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
  "duration": 141036,
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
  "duration": 2575402,
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
  "duration": 140247,
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
  "duration": 1084047,
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
  "duration": 383209,
  "status": "passed"
});
formatter.after({
  "duration": 6091839,
  "status": "passed"
});
formatter.after({
  "duration": 26469,
  "status": "passed"
});
formatter.before({
  "duration": 359506,
  "status": "passed"
});
formatter.before({
  "duration": 13256665,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 2943994,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 3928881,
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
  "duration": 2522070,
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
  "duration": 1823601,
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
  "duration": 10288177,
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
  "duration": 138667,
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
  "duration": 12968665,
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
  "duration": 144197,
  "status": "passed"
});
formatter.after({
  "duration": 2973623,
  "status": "passed"
});
formatter.after({
  "duration": 26864,
  "status": "passed"
});
formatter.before({
  "duration": 33185,
  "status": "passed"
});
formatter.before({
  "duration": 16060808,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 4776287,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 2350612,
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
  "duration": 1851255,
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
  "duration": 1868243,
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
  "duration": 6455691,
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
  "duration": 8678303,
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
  "duration": 144197,
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
  "duration": 643949,
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
  "duration": 107852,
  "status": "passed"
});
formatter.after({
  "duration": 3085426,
  "status": "passed"
});
formatter.after({
  "duration": 121679,
  "status": "passed"
});
formatter.before({
  "duration": 99556,
  "status": "passed"
});
formatter.before({
  "duration": 6689172,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3171945,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 1799897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 2921080,
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
  "duration": 10218647,
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
  "duration": 1970169,
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
  "duration": 3012735,
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
  "duration": 2683649,
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
  "duration": 1655306,
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
  "duration": 1705478,
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
  "duration": 1549825,
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
  "duration": 1382318,
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
  "duration": 7646405,
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
  "duration": 113777,
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
  "duration": 5094706,
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
  "duration": 142617,
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
  "duration": 4614312,
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
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.borrow(String,int,int)"
});
formatter.result({
  "duration": 5991099,
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
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.returnBook(String,int,int)"
});
formatter.result({
  "duration": 5726014,
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
  "duration": 4223202,
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
  "duration": 139457,
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
  "duration": 5665569,
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
  "duration": 709924,
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
  "duration": 133926,
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
  "duration": 6305963,
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
  "duration": 108247,
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
  "duration": 5957915,
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
  "duration": 111407,
  "status": "passed"
});
formatter.after({
  "duration": 3338265,
  "status": "passed"
});
formatter.after({
  "duration": 37926,
  "status": "passed"
});
formatter.before({
  "duration": 53729,
  "status": "passed"
});
formatter.before({
  "duration": 3677622,
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
  "location": "StepDefinitions.independece()"
});
formatter.result({
  "duration": 3082266,
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
  "location": "StepDefinitions.userCreate(String)"
});
formatter.result({
  "duration": 2002959,
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
  "duration": 1330565,
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
  "duration": 2185872,
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
  "duration": 1993872,
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
  "duration": 1787256,
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
  "duration": 1552590,
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
  "duration": 1951997,
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
  "duration": 5961865,
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
  "duration": 519110,
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
  "duration": 7893318,
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
  "duration": 107852,
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
  "duration": 4638411,
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
  "duration": 1633972,
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
  "duration": 5268533,
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
  "duration": 148148,
  "status": "passed"
});
formatter.after({
  "duration": 3291648,
  "status": "passed"
});
formatter.after({
  "duration": 26074,
  "status": "passed"
});
});