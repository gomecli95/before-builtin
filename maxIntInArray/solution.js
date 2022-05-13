// Your solution here

function maxIntArray(arr) {
    let max = Number.MIN_VALUE;
    arr.forEach(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

console.log(maxIntArray([ 3, 6, 4, 5, 2, 1 ]));