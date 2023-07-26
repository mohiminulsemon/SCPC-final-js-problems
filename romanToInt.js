function romanToInt(romanNum) {
    const IntValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let res = 0;
    let prevVal = 0;

    for (let i = romanNum.length - 1; i >= 0; i--) {
        const currentValue = IntValues[romanNum[i]];
        if (currentValue >= prevVal) {
            res += currentValue;
          } else {
            res -= currentValue;
          }
      
          prevVal = currentValue;
    }

    return res;
}

console.log(romanToInt("IV"));
console.log(romanToInt("XIII"));
console.log(romanToInt("XXI"));