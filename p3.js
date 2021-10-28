let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let oddArr = [];
let evenArr = [];

for (let elmt of arr) {
    if (elmt % 2 === 0) { // elmt even
        sum -= elmt;
        evenArr.push(elmt);
    } else { // elmt odd
        sum += elmt;
        oddArr.push(elmt);
    }
}

console.log("1. ", sum);
console.log("2. ", "odd:", oddArr, "even:", evenArr);