// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {

let result = '';
for (char in s) {
    if (char <= s.length - 2) {
        result += s[char].toUpperCase() + s[char].toLowerCase().repeat(char) + '-';
    } else {
        result += s[char].toUpperCase() + s[char].toLowerCase().repeat(char);
    }
}
return result;
}

console.log(accum('ZpglnRxqenU'));



function accum2(s) {
 return s.split('').map((char,i) => (char.toUpperCase() + char.toLowerCase().repeat(i))).join('-');
}

console.log(accum2('ZpglnRxqenU'));