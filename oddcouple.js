function oddCouple(nums) {

    // create a new array to be returned
    let oddNums = [];
  
    // loop through all of the numbers in the given array
    for (let i = 0 ; i < nums.length; i++) {
  
      // store each number in a variable (optional)
      let currentNum = nums[i];
  
      // if the currentNum is odd...
      if (currentNum % 2) {
  
        // ... push it into our oddNums array
        oddNums.push(currentNum);
  
        // if we've found the first two odd numbers...
        if (oddNums.length === 2) {
  
          // ...return oddNums now
          return oddNums;
        }
      }
    }
  
    // return oddNums here; it will either be empty or contain one number
    return oddNums;
  }