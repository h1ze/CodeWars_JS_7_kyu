// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
  let result = 0;
  if (begin === end) {
    return begin;
  }
  for (let i = begin; i <= end; i + step) {
    result += i;
  }
  return result;
};

console.log(sequenceSum(2, 2, 2));
