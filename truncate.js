function truncate(str, num) {
 
  if(str.length <= num)
    return str;
  
  
  if((str.length > 3)&&(num < 3)){
    str = str.slice(0, num);
    return str + "...";
  }
  
  if(str.length > 3){
    str = str.slice(0, num - 3);
    return str + "...";
  }
  
  
  if(str.length <= 3){
    str = str.slice(0, num);
    return str + "...";
  }
  if(str.length > num){
    str = str.slice(0, num);
    return str + "...";
  }
  
}

truncate("Absolutely Longer", 2);
