// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum( a,b )
{ 
    return (a+b) * (Math.abs(a-b) + 1) / 2;
}

console.log(getSum(4,1));

function getSum2( a,b )
{ 
    let result = 0;

    if (a == b) {
        return a;
    } else if (a > b) {
        for (let i = 0; i <= a - b ; i++ ) {
           result += b + i;
        }
    } else {
        for (let i = 0; i <= b - a; i++ ) {
            result +=a + i;
        } 
    }
    return result;
}

console.log(getSum(5,1));