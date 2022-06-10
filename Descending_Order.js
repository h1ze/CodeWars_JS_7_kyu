// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => a - b).reverse().join(''));
  }

console.log(descendingOrder(42145))


// Функция в sort в первом варианте не нужна, так как цифры в строковом виде автоматически отсортируются по возрастанию и останется только перевернуть
// массив.

function descendingOrder2(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  console.log(descendingOrder2(42145))