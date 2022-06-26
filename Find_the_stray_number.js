// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let sortNum = numbers.sort((a, b) => a - b);
  let min = sortNum[0];
  let medium = sortNum[1];
  let max = sortNum[sortNum.length - 1];
  return min === max ? min : min === medium ? max : min;
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));

function stray2(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}
