// Your solution here

// Write a function that takes in a string and
// outputs the *first* occurrence of a character
// that does not repeat itself in that string.


// Ex:
// Input: “the quick brown fox jumps over the calm kitten quietly”
// Output: "b"

// Input: “this hat is the greatest!”
// Output: "g"

// Input: “what a wonderful day it has been!”
// Output: "o"

function firstUniqueCharacter(str) {
    let firstUnique;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                firstUnique = arr[i];
            } else {
                break;
            }
        }
    }
    return firstUnique;
}

console.log(firstUniqueCharacter("this hat is the greatest"));