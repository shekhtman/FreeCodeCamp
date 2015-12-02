function removeElements(arr) {
  var args = Array.prototype.slice.call(arguments);
  //args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
removeElements([1,2,3,4,5,6,7],4,5);
