// Your solution here

function firstUniqueCharacter(str) {
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        let repeat = 0;
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j]) repeat++;
        }
        if(repeat == 1) {
            return arr[i];
        }
    }
}

console.log(firstUniqueCharacter("the quick brown fox jumps over the calm kitten quietly"));