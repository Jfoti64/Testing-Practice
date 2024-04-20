function capitalize(string) {
  let newString = string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split('').reverse().join('');
}

const calculate = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Can't divide by zero");
    }
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

export { capitalize, reverse, calculate };
