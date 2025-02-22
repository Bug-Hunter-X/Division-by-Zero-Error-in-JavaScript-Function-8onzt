function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return "Division by zero is not allowed"; //Explicit handling of zero values
  }
  return a / b;
}