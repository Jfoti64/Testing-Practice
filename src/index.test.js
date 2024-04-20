import { capitalize, reverse, calculate, caesarCipher } from './index';

test('capitalize first letter of string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('hi')).toBe('Hi');
});

test('reverse the string', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('hi')).toBe('ih');
  expect(reverse('hi there')).toBe('ereht ih');
});

test('calculate the correct output', () => {
  expect(calculate.add(2, 5)).toBe(7);
  expect(calculate.add(-2, 12)).toBe(10);
  expect(calculate.subtract(10, 5)).toBe(5);
  expect(calculate.subtract(20, 0.5)).toBe(19.5);
  expect(calculate.divide(10, 5)).toBe(2);
  expect(() => calculate.divide(5, 0)).toThrow(Error);
  expect(calculate.multiply(5, 5)).toBe(25);
  expect(calculate.multiply(-5, 2)).toBe(-10);
});

test('shift string char by shift factor', () => {
  expect(caesarCipher('hello', 2)).toBe('jgnnq');
  expect(caesarCipher('hi', 2)).toBe('jk');
  expect(caesarCipher('hello', 4)).toBe('lipps');
  expect(caesarCipher('HeLlO', 4)).toBe('LiPpS');
  expect(caesarCipher('zebra', 5)).toBe('ejgwf');
  expect(caesarCipher('Zebra', 5)).toBe('Ejgwf');
});
