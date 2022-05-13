// Your solution here

function loneSum(a, b, c) {
    if (a == b && a == c) {
        return a;
    } else if (a == b) {
        return a + c;
    } else if (a == c) {
        return a + b;
    } else if (b == c) {
        return a + b;
    } else {
        return a + b + c;
    }
}

console.log (loneSum(2,2,3));