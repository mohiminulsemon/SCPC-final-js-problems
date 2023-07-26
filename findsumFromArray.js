function findSum(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        const sum = arr[l] + arr[r];

        if (sum === target) {
            return [l, r];
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }

    return [];
}

const arr = [1, 3, 6, 8, 11, 15];
const target = 9;
const res = findSum(arr, target);
console.log(res);
