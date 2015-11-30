function largestOfFour(arr) {
  
  var outer;
  var inner;
  var best;
  var new_arr = [];
  
  for (outer = 0; outer < 4; outer++){
    
    best = 0;  
    
    for(inner = 0; inner < 4; inner++){
      
      if(arr[outer][inner] > best)
        
        best = arr[outer][inner];
    }
    
    new_arr[outer] = best;
  }
  return new_arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
