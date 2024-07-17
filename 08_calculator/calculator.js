const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((a,c)=> a+c,0)
};

const multiply = function(arr) {
  return arr.reduce((a,c) => a*c, 1)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  if(num === 0) return 1
  let product = 1
	for(let i = 1; i<=num; i++) {
    product *= i
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
