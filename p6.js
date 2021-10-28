// testcase 1
// let nums = [2, 7, 11, 15];
// let target = 9;

// testcase 2
// let nums = [3, 2, 4];
// let target = 6;

// testcase 3
// let nums = [3, 3];
// let target = 6;

// testcase 4
let nums = [1, 3, 6, 7, 9];
let target = 10;

let ans = twoSum(nums, target);
console.log(ans);

function twoSum(nums, target) {
    let map = new Map();
    for (let [k, n] of Object.entries(nums)) {
        if (map.has(target - n)) {
            return [parseInt(map.get(target - n)), parseInt(k)];
        }
        map.set(n, k);
    }
}