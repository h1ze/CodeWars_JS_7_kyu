// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  let reverseStr = str.split("").reverse().join("");
  let reverseEnding = ending.split("").reverse().join("");
  console.log(reverseStr, reverseEnding);
  for (let i = 0; i < ending.length; i++) {
    if (reverseStr[i] !== reverseEnding[i]) {
      return false;
    }
  }
  return true;
}

console.log(solution("abcde", "cde"));



function solution2(str, ending) {
  return str.endsWith(ending);
}
