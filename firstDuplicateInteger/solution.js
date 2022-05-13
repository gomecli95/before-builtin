// Your solution here

function firstDuplicateInteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return arr[i];
            } 
        }
    }
}

console.log(firstDuplicateInteger([ 1, 3, 4, 1, 3, 4 ]));