// Only change code below this line
function countdown(n){
  if (n >= 1) {
    var countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
  else return [];
}
// Only change code above this line