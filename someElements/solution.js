// Your solution here

function someElements(arr, functionParam) {
    let result = false;
    arr.forEach(num => {
        let funcResult = functionParam(num);
        if(funcResult == true) {
            result = true;
        }
    });
    return result
}

console.log(someElements([1,2,3], function(num){return num % 2 === 0}))