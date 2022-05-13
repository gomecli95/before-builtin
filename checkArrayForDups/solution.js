// Your solution here

function checkArrayForDups(nums) {
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (element === nums[j]) {
                result = true;
            }
        }
    }
    return result;
}

console.log(checkArrayForDups([1,2,3,1]));