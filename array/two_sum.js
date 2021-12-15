// Given an array of integers, return the indices of the tow numbers that add up to a given target 

// given = [1,3,7,9,2]      target = 11       o/p:= [3,4]

// Step 1: VERIFY the constraints!
    // 1.1 -> Are all of the numbers positive or can there be negatives?        Ans:=  all pos(+)
    // 1.2 -> Are there duplicate numbers in the array ?        Ans:= NO
    // 1.3 -> Will there always be a solutions available?       Ans:= No,  return null.
    // 1.4 -> can there be multiple pairs that add up to the target ?           Ans:= NO.

// Step : 2 Test cases. 
    // [1,3,7,9,2]  t=11   op:[3,4]
    // [1,3,7,9,2]  t=25   op:null
    // []           t=1    op:null
    // [1,6]        t=7    op:[0,1]

// Step 3: Figure out a Soln without {code}
    // nums = [1,3,7,9,2]; t=11;
    // p1=0, p2=1;
    // num_to_find = t - nums[p1];

// s4: {code}

// s5: [{testing},]




