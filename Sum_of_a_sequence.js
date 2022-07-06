// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
  let result = 0;
  if (begin === end) {
    return begin;
  }
  if (begin > end) {
    return 0;
  }
  while (begin <= end) {
    result += begin;
    begin += step;
  }
  return result;
};

console.log(sequenceSum(1, 5, 3));

const sequenceSum2 = (begin, end, step) => {
  let result = Math.floor((end - begin) / step);
  if (begin === end) {
    return begin;
  }
  if (begin > end) {
    return 0;
  }
  return Math.floor(begin * (result + 1) + step * result * ((result + 1) / 2));
};

console.log(sequenceSum2(1, 5, 3));
