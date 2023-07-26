function calculate(x, op, y) {
    switch (op) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        if (y === 0) {
          return "Error: Cannot divide by zero";
        }
        return x / y;
      default:
        return "Error: Invalid operator";
    }
  }
  

  const x = 10;
  const y = 5;
  const op = '+';
  const res = calculate(x, op, y);
  console.log(res); 
  