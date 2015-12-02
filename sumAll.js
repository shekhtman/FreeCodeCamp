function sumAll(arr) {
  
  var min = 0;
  var max = 0;
  var sum = 0;
  
  if(arr[0] < arr[1]){
    min = arr[0];
    max = arr[1];
  }
  else{
    min = arr[1];
    max = arr[0];
  }
  
  for(var int = min; int <= max; int++){
    sum += int;  
  }
  return sum;
}
sumAll([4,1]);
