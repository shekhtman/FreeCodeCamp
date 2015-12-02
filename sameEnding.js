function sameEnding(str, target) {
  substr_start = (str.length - target.length); 
  substr_last = str.length;
  substr_str = str.substr(substr_start, substr_last);
  
  var n = substr_str.localeCompare(target);
    
  if (n === 0)
    return true;
  else
   return false;
}

sameEnding("Bastian", "astian");
