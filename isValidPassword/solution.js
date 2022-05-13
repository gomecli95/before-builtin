// Your solution here

function isValidPassword(str) {
    return (str.length > 7 && str.toLowerCase() !== str && str.toUpperCase() !== str);  
}

console.log(isValidPassword("RexTheDog"));