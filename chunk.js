function chunk(arr, size) {
  
  var group = 0;
  var group_member = 0;
  var new_array = [];
  var groups = arr.length / size;
  var arr_index = 0;
  
  for(group = 0; group < groups; group++){
      new_array[group] = [];
      for(group_member = 0; group_member < size; group_member++ ){
        new_array[group][group_member] = arr[arr_index++];
        if(arr_index === arr.length)
          break;
      }
  }
    
  return new_array;

}
chunk([0, 1, 2, 3, 4, 5], 2);
