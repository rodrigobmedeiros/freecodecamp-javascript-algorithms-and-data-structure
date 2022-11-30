function checkObj(obj, checkProp) {
  // Only change code below this line
  const value = obj.hasOwnProperty(checkProp) ? obj[checkProp]: "Not Found";
  return value;
  // Only change code above this line
}