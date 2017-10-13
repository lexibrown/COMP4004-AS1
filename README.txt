COMP 4004

Assignment 1: JUnit and Git

Lexi Brown
GitHub Repo: https://github.com/lexibrown/COMP4004-AS1

PLEASE READ EVERYTHINGs (i tried okay)

TO RUN IN ECLIPSE:

Runnable Class: StartTerminals.java, Server.java
Runnable Tests: All tests under com.comp4004.test package

There are two test suites: TestSuite.java and TestDatabaseSuite.java

Logger may not register log4j in properties, if so, follow these steps in Eclipse
1. Run -> Run Configurations...
2. Java Application -> <Server or StartTerminals>
3. Click Classpath Tab
4. Click SimpleLibrary
5. Advanced..
6. Check 'Add Folders' and hit OK
7. Find the 'properties' folder
8. Hit Apply and Run


All documentation is the /resources folder


TEST LOGGING

Tests are logged in the same file as running the program. Open any text reader and search for the tag [CONTROLLER].
Which will then have the class path for the tests. There is a sample of the test logging in the resources folder.