// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. 
// Ignore letter case.

function isIsogram(str){
   return new Set(str.toLowerCase()).size == str.length;
}

console.log(isIsogram('moOse'));

function isIsogram2(str){
    let result = [];
    for (i = 0; i < str.length; i++) {
        if (result[str[i].toUpperCase]) return true;
        result[str[i].toUpperCase] = 1;
    }
    return false;
 }

 console.log(isIsogram('aba'));


 function isIsogram3(str) {
     for (i = 0; i < str.length; i++) {
         if (str.toUpperCase().split(str[i].toUpperCase()).length -1 > 1) {
             return false;
         }
        }
     return true;
 }

console.log(isIsogram3('Dermatolgyphics'))

function isIsogram4(str){ 
    return !/(\w).*\1/i.test(str)
  }

  console.log(isIsogram4('aba'))
