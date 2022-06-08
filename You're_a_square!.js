// Given an integral number, determine if it's a square number

var isSquare = function(n){
    return Math.ceil(Math.sqrt(n)) ** 2 == n;
  }

console.log(isSquare(0));


function isSquare2(n) {
    return Math.sqrt(n) % 1 === 0;
  }

  console.log(isSquare2(79));


  const isSquare3 = n => Number.isInteger(Math.sqrt(n));

  console.log(isSquare3(81));
