let mystr = "人易科技:上 機 測 驗 - 演算法";

let part1 = mystr.replace(/:/g, "：");

let part2 = part1.replace(/\s/g, "")
    .replace(/-/g, " - ");

let index1 = part2.indexOf("：");
let index2 = part2.indexOf("-") + 1;
let part3 = part2.substring(index1, index2);

// console.log(part1);
// console.log(part2);
console.log(part3);