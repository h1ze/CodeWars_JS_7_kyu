// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    return str.match(/[x]/ig) == null && str.match(/[o]/ig) == null ? true : str.match(/[x]/ig) == null || 
    str.match(/[o]/ig) == null ? false : str.match(/[x]/ig).length == str.match(/[o]/ig).length;
}

console.log(XO('oo'))

function XO2(str) {
    let charX = str.match(/x/ig);
    let charO = str.match(/o/ig);
    return (charX && charX.length) === (charO && charO.length)
}

console.log(XO2('ooO'))