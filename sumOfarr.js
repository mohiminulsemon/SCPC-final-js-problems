function summition(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] > 0) {
        sum += x[i];
      }
    }
    return sum;
  }
  
  const a = [2, -5, 10, -3, 7];
  const sum = summition(a);
  console.log(sum); 
  