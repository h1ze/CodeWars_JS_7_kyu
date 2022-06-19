// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  wordsArray = str.split(" ");
  reverseWordsArray = [];
  wordsArray.forEach((element) => {
    reverseWordsArray.push(element.split("").reverse().join(""));
  });
  result = reverseWordsArray.join(" ");
  return result;
}

console.log(reverseWords("double  spaced  words"));

function reverseWords2(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
