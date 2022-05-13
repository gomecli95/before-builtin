// Your solution here

function smilingMonkeys(aSmile, bSmile) {
    if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
        return true;
    } else {
        return false;
    }
}

console.log(smilingMonkeys(true, true));
