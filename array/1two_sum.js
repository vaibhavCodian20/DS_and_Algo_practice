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
  //--->Brute Force; 
    // nums = [1,3,7,9,2]; t=11;
    // p1=0, p2=1;
    // num_to_find = t - nums[p1];

    //time_complexity:O(n^2)
    //space_complexity:O(1)


  //--->Optimal Solution; 

  // # use a hash map & put NTF in it to utilize only one for loop, bringing down the time complexity to O(N)
  
  //time_complexity:O(n)
  //space_complexity:O(n)

// s4: {code}

var twoSumS1 = function(nums, target) {
    for(let p1=0;p1<nums.length; p1++){
        const NTF = target - nums[p1];
        for(let p2=p1+1; p2<nums.length; p2++){
            if(NTF === nums[p2]){
                return [p1,p2];
            }
        }
    }
    
};

var twoSumS2 = function(nums, target) {
    const ntfArray = {};
    for (let p=0; p<nums.length; p++){
        if(ntfArray[nums[p]] >= 0){
            return [ntfArray[nums[p]], p];
        } else {
            const numberToFind = target - nums[p];
            ntfArray[numberToFind] = p;
        }
    } return null;
    
};

// s5: [{testing},]
console.log(twoSumS1([1,3,7,9,2], 11))
console.log(twoSumS2([1,3,7,9,2], 11))

