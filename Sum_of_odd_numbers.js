// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return n * n * n;
}

function rowSumOddNumbers2(n) {
  let maxNumber = ((n * (n + 1)) / 2) * 2 - 1; //последнее число в строке
  let minNumber = ((n * (n - 1)) / 2) * 2 + 1; //первое число в строке
  let sumOfNumbers = ((minNumber + maxNumber) / 2) * n; //сумма строки
  return sumOfNumbers;
}

console.log(rowSumOddNumbers2(2));
