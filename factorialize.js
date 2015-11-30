function factorialize(num) {
  var fact = 1;  
  for (i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

factorialize(10);
