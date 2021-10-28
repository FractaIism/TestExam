let a = [77, 5, 5, 22, 13, 55, 97, 4, 796, 1, 0, 9];
let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let c = intersection(a, b);
let d = difference(a, b);
let e = union(a, b);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);

function intersection(A, B) {
    let sortFunc = (a, b) => a - b;
    let sortA = A.sort(sortFunc);
    let sortB = B.sort(sortFunc);
    let itx = []; // result array
    let i = 0, j = 0;
    // similar to mergesort "merge" function
    while (i < sortA.length && j < sortB.length) {
        if (sortA[i] === sortB[j]) {
            if (sortA[i] !== itx[itx.length - 1]) {
                itx.push(sortA[i]);
            }
            ++i;
            ++j;
        } else if (sortA[i] < sortB[j]) ++i;
        else if (sortA[i] > sortB[j]) ++j;
    }
    return itx;
}

function union(A, B) {
    let sortFunc = (a, b) => a - b;
    let sortA = A.sort(sortFunc);
    let sortB = B.sort(sortFunc);
    let uni = []; // result array
    let i = 0, j = 0;
    // similar to mergesort "merge" function
    while (i < sortA.length && j < sortB.length) {
        if (sortA[i] < sortB[j]) {
            if (sortA[i] !== uni[uni.length - 1]) {
                uni.push(sortA[i]);
            }
            ++i;
        } else if (sortA[i] > sortB[j]) {
            if (sortB[j] !== uni[uni.length - 1]) {
                uni.push(sortB[j]);
            }
            ++j;
        } else {
            if (sortA[i] !== uni[uni.length - 1]) {
                uni.push(sortA[i]);
            }
            ++i;
            ++j;
        }
    }
    while (i < sortA.length) {
        if (sortA[i] !== uni[uni.length - 1]) {
            uni.push(sortA[i]);
        }
        ++i;
    }
    while (j < sortB.length) {
        if (sortB[j] !== uni[uni.length - 1]) {
            uni.push(sortB[j]);
        }
        ++j;
    }
    return uni;
}

function difference(A, B) {
    let sortFunc = (a, b) => a - b;
    let sortA = A.sort(sortFunc);
    let sortB = B.sort(sortFunc);
    let diff = []; // result array
    let i = 0, j = 0;
    // similar to mergesort "merge" function
    while (i < sortA.length && j < sortB.length) {
        if (sortA[i] === sortB[j]) {
            while (++i < sortA.length && sortA[i] === sortB[j]) {
                // skip equal entries, do nothing
            }
        } else if (sortA[i] < sortB[j]) {
            diff.push(sortA[i]);
            ++i;
        } else if (sortA[i] > sortB[j]) ++j;
    }
    while (i < sortA.length) {
        if (sortA[i] !== diff[diff.length - 1]) {
            diff.push(sortA[i]);
        }
        ++i;
    }
    return diff;
}