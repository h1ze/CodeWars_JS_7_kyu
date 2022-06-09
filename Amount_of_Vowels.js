// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = 'aeiou'.split('');
    let vowelsCount = 0;
    for (char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
  }

console.log(getCount('abracadabra'));


// Регулярные выражения

function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  console.log(getCount2('abracadabr'));