function whereToInsert(arr, num) {
  
  arr.sort(function(a,b){
  return a - b;
  });

  for(var i = 0; i < arr.length; i++){
    if(num < arr[i])
      break;
    if( (arr[i] <= num) && (num <= arr[i+1]) )
      break;
  }
  
  if(i === 0) //in front
    return 1;
  if(i === arr.length) //in back
    return i; 
  else //somewhere in the middle
    return i+1;
}

whereToInsert([40, 60], 50);
