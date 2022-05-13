// Your solution here

function whatDay(number) {
    dayNo = number % 7; 
    if (dayNo == 0) return "Sunday";
    else if (dayNo == 6) return "Saturday";
    else if (dayNo == 5) return "Friday";
    else if (dayNo == 4) return "Thursday";
    else if (dayNo == 3) return "Wednesday";
    else if (dayNo == 2) return "Tuesday";
    else return "Monday";
}

console.log(whatDay(1002));