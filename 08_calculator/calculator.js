const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let result = 0;
  for(i = 0; i < numArray.length; i++){
    result += numArray[i];
  }

  return result;
};

const multiply = function(numArray) {
  let result = 1;
  for(i = 0; i < numArray.length; i++){
    result *= numArray[i];
  }

  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let result = num;
  if(num === 0 || num ===1){
    return 1;
  }else{
    while(num > 1){
      num--;
      result *= num;
    }
  }

  return result;
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
