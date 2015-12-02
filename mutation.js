function mutation(arr) {
  
  var word1 = arr[0];
  var word2 = arr[1];
  
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  
  var word2_len = word2.length; 
  word2 = word2.split('');
  
  var i = 0;
  var count = 0;
  
  for(i = 0; i < word2_len; i++){
    if (word1.indexOf(word2[i]) !== -1)
      count++;
  }
  
  if(word2_len === count)
      return true;
  else
      return false;
  
}

mutation(["Alien", "line"]);
