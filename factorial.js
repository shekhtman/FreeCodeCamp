function factorial(num) {
  var fact = 1;  
  for (i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

factorial(10);
