const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  let tmp = s[2];
  s[2] = s[0];
  s[0] = tmp;

  tmp = s[1];
  s[1] = s[2];
  s[2] = tmp;
  // Only change code above this line
}
editInPlace();