// Your solution here

function talkingParrot(hour, isParrotTalking) {
    let result;
    if (hour > 23 || hour <0 ) {
        result = "Wrong Input!";
    } else {
        if ((hour > 20 || hour < 7) && isParrotTalking) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

console.log(talkingParrot(21, true));