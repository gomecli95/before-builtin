// Your solution here

function sleepIn(weekday, vacation) {
    if(!weekday || vacation) {
        return true;
    } else {
        return false;
    }
}


console.log(sleepIn(false, true));