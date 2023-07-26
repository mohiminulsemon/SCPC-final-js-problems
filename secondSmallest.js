function findNumber(num) {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let x of num) {
        if (x < smallest) {
            secondSmallest = smallest;
            smallest = x;
        } else if (x < secondSmallest && x !== smallest) {
            secondSmallest = x;
        }
    }

    return secondSmallest;
}


const arr = [6, 2, 8, 1, 3, 7, 9];
const res = findNumber(arr);
console.log(res);
