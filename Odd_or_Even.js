// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  if (!array.length) {
    return "even";
  }
  arraySum = array.reduce((acc, el) => acc + el);
  return arraySum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([1, 2, 4]));

function oddOrEven2(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
