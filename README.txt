COMP 4004

Assignment 2: Cucumber

Lexi Brown
GitHub Repo: https://github.com/lexibrown/COMP4004-AS1

PLEASE READ EVERYTHING (i tried okay)

TO RUN IN ECLIPSE:

Run the CucumberSuite.java as a Junit test

All documentation is the /resources folder

NOTES

For S4, on G(t2, i22) which is add copy 2 to title 2. My system does not support this because it is bad functionality.
Admin should not be able to add a copy at random, i.e, there are 2 copys and you add copy 17. No, that is not okay. So
my system fills in the next available spot, i.e, there are 2 copys and the next added copy is copy 3. Or there are 3
copies, copy 2 is removed leaving a copy 1 and copy 3. When adding a new copy, the new copy is copy 2. This is proper
functionality so I am not following the one step G(t2, i22) because it should be G(t2, i21). This will also change step
D(u1, i22) to D(u1, i21) and F(u1, i22) to F(u1, i21) as i22 does not exist. Also all i21 will switch with i22.

So it goes from:
S4:
I(t3).I(t1).G(t3,i31).A(u1).G(t1,i11).G(t1,i12).A(u2).I(t2).
G(t2,i22).G(t3,i32).H(i11).D(u1,i22).G(t2,i21).H(i31).
F(u1,i22).D(u2,i32).H(i12).H(i21).J(t1).H(i22).C(u1).
F(u2,i32).C(u2).H(i32).J(t2).J(t3)

to

S4:
I(t3).I(t1).G(t3,i31).A(u1).G(t1,i11).G(t1,i12).A(u2).I(t2).
G(t2,i21).G(t3,i32).H(i11).D(u1,i21).G(t2,i22).H(i31).
F(u1,i21).D(u2,i32).H(i12).H(i22).J(t1).H(i21).C(u1).
F(u2,i32).C(u2).H(i32).J(t2).J(t3)
