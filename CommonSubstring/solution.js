// Your solution here

function commonSubstring(str1, str2) {
    let result = "NO";
    const str1Chars = str1.split("");
    const str2Chars = str2.split("");
    str1Chars.forEach(char => {
        if (str2Chars.includes(char)) result = "YES";
    });
    return result;
}

console.log(commonSubstring("Hello", "World"));