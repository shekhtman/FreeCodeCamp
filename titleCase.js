function titleCase(str) {
  
  var str1 = str.toLowerCase();
  
  str1 = str1.split(' ');
  
  for(var i = 0; i < str1.length; i++){
    str1[i] = str1[i].charAt().toUpperCase() + str1[i].substring(1); 
  }
  
  str = str1.join(' ');
  return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
