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
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(string, shiftFactor) {
  // Adjust the shift factor to prevent irrelevant full cycles (e.g., shifting by 26 is the same as shifting by 0)
  shiftFactor = shiftFactor % 26;

  let modifiedString = string
    .split('')
    .map((char) => {
      let code = char.charCodeAt(0);

      // Shift lowercase letters
      if (code >= 97 && code <= 122) {
        code = ((code - 97 + shiftFactor) % 26) + 97;
      }
      // Shift uppercase letters
      else if (code >= 65 && code <= 90) {
        code = ((code - 65 + shiftFactor) % 26) + 65;
      }
      // Convert the modified char codes back to characters
      return String.fromCharCode(code);
    })
    .join('');

  return modifiedString;
}

function analyzeArray(arr) {
  function computeSum(arr) {
    let sum = 0;
    arr.forEach((element) => {
      sum += element;
    });
    return sum / arr.length;
  }

  function computeMin(arr) {
    let currentMin = arr[0];
    arr.forEach((element) => {
      if (currentMin > element) {
        currentMin = element;
      }
    });
    return currentMin;
  }

  function computeMax(arr) {
    let currentMax = arr[0];
    arr.forEach((element) => {
      if (currentMax < element) {
        currentMax = element;
      }
    });
    return currentMax;
  }

  return {
    average: computeSum(arr),
    min: computeMin(arr),
    max: computeMax(arr),
    length: arr.length,
  };
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(object);
export { capitalize, reverse, calculate, caesarCipher, analyzeArray };
