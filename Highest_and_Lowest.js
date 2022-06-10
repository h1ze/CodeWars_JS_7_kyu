// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let sortArray = numbers.split(' ').map(Number).sort((a,b) => a - b);
    let highest = sortArray[sortArray.length -1];
    let lowest = sortArray[0];
    return highest + ' ' + lowest;
    // return sortArray[0], sortArray[sortArray.length - 1];
  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// С Math

function highAndLow2(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  function highAndLow3(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }