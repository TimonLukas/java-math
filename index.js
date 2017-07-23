const factorial = require('math-factorial');

const {
  parseWord
} = require('./util');

module.exports = word => {
  const number = parseWord(word);

  const fn =  () => {
    return number;
  };

  fn.factorial = () => factorial(number);

  return fn;
};