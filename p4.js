let arr = [77, 5, 5, 22, 13, 55, 97, 4, 796, 1, 0, 9];
let sorted = mergeSort(arr);
console.log(sorted);

function mergeSort(arr) {
    let L = arr.length;
    if (L === 1) return arr;
    let mid = Math.floor(L / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    let sortedLeftArr = mergeSort(leftArr);
    let sortedRightArr = mergeSort(rightArr);
    return merge(sortedLeftArr, sortedRightArr);
}

function merge(leftArr, rightArr) {
    let i = 0, j = 0;
    let sortedArr = [];
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            sortedArr.push(leftArr[i++]);
        } else {
            sortedArr.push(rightArr[j++]);
        }
    }
    while (i < leftArr.length) {
        sortedArr.push(leftArr[i++]);
    }
    while (j < rightArr.length) {
        sortedArr.push(rightArr[j++]);
    }
    return sortedArr;
}
