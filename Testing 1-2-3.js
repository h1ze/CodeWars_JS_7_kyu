// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
  let n = 1;
  return array.map(function (el) {
    if (!el[0]) {
      el = `${n}: `;
    } else {
      el = `${n}: ${el[0]}`;
    }
    n++;
    return el;
  });
};

console.log(number(["", "", ""]));

var number2 = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};
