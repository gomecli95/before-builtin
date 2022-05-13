// Your solution here

function reverseDigit(num) {
    const digs = num.toString().split("");
    let reversed = "";
    for (let i = digs.length - 1; i >= 0; i--) {
        reversed += digs[i];
    }
    return parseInt(reversed);
}

console.log(reverseDigit(1234));