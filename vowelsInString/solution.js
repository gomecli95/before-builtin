// Your solution here

function vowelsInString(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let noOfVowels = 0;
    let chars = str.split("");
    chars.forEach(char => {
        if (vowels.includes(char)) noOfVowels++;
    });
    return noOfVowels;
}

console.log(vowelsInString("you are great!"));