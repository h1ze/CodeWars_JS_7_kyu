// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(el => typeof(el) == 'number');
  }

console.log(filter_list([1,2,0,'a','b']))

function filter_list2(l) {
    return l.filter(el => Number.isInteger(el));
  }

  console.log(filter_list2([1,2,0,'a','b']))