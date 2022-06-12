// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
}

console.log(findShort("Let's travel abroad shall we"))

function findShort2(s){
    return Math.min.apply(null, s.split(' ').map(word => word.length));
  }

console.log(findShort2('Fly me to the moon'))