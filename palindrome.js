function palindrome(str) {
  
  //stip everything except for alpha-numberic characters
  var str1 = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()\s]/g,'');
  
  //convert to lower case
  str1 = str1.toLowerCase();
  
  //reverse above string
  var str2 = str1.split('').reverse().join('');
  
  //compare if two string are equal
  var n = str1.localeCompare(str2);
  if(n === 0)
    return true;
  else
    return false;
}

palindrome("A man, a plan, a canal. Panama");
