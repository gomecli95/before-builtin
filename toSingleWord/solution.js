// Your solution here

function singleWord(str) {
    let numberOfSpaces = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str.substring(i, i + 1) == " ") numberOfSpaces++;
    }
    for (let j = 0; j < numberOfSpaces; j++) {
        str = str.replace(" ", "");
    }
    return str.toLowerCase();
}

console.log(singleWord("Tg Sch oo jhkhj SGSDGDSF DSF SDF df d d l    g"));