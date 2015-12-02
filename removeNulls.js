function removeNulls(arr) {  
  return arr.filter(function(value){
    return Boolean(value);
  });
}
removeNulls([7, 'ate', '', false, 9]);
