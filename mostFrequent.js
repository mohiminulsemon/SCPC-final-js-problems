const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5]
let count  = {};

for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
}
let max = 0;
let maxElement = 0;
for (const element in count) {
    // console.log(element ,' = ' ,count[element])
    if (count[element] > max) {
        max = count[element];
        maxElement = element;
    }

}

console.log(maxElement);