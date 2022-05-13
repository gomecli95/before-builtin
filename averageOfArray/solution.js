// Your solution here

function averageOfArr(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return (sum / arr.length);
}

console.log(averageOfArr([ 1.5, 3, 2.5, 1 ]));