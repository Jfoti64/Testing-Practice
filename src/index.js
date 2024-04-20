function capitalize(string) {
  let newString = string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split('').reverse().join('');
}

export { capitalize, reverse };
