/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    arr2.push(el + "!");
  }
  return arr2;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let arr2 = [];
  let i = 0;
  while (i < arr.length) {
    arr2.push(arr[i] + "!");
    i++;
  }
  return arr2;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
  let arr2 = [];
  for (let el of arr) {
    arr2.push(el + "!");
  }
  return arr2;
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  return nums.filter((num) => {
    return num % 2 === 1;
  });
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  return nums.filter((num) => {
    return num % 2 === 0;
  });
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  nums.sort((num1, num2) => {
    return num1 - num2;
  });
  return nums[0];
}

// ask if this is bad practice!

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  smallestNum = Infinity;
  secondSmallestNum = Infinity;

  nums.forEach((num) => {
    if (num < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = num;
    } else if (num < secondSmallestNum) {
      secondSmallestNum = num;
    }
  });
  return secondSmallestNum;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  largestNum = -Infinity;
  secondLargestNum = -Infinity;

  nums.forEach((num) => {
    if (num > largestNum) {
      secondLargestNum = largestNum;
      largestNum = num;
    } else if (num > secondLargestNum) {
      secondLargestNum = num;
    }
  });
  return secondLargestNum;
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let noDups = [];
  nums.forEach((num) => {
    if (!noDups.includes(num)) {
      noDups.push(num);
    }
  });
  return noDups;
}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};
