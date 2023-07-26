function reverse_string(str) {
    let reverse_str = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverse_str += str[i];
    }

    return reverse_str;
}
let str = "hello world"

let reversed = reverse_string(str);
console.log(reversed);
