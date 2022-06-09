// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let arrayNum = num.toString().split('').map(a => String((+a)**2)).reduce((a,b) => a + b);
    return +arrayNum;
  }

console.log(squareDigits(3212));

function squareDigits2(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  }

console.log(squareDigits(4292));