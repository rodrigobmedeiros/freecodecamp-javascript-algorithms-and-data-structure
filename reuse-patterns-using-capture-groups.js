let repeatNum = "42 42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = repeatNum.match(reRegex);

console.log(result)