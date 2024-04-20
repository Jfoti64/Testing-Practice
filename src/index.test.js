import { capitalize, reverse } from './index';

test('capitalize first letter of string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('hi')).toBe('Hi');
});

test('reverse the string', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('hi')).toBe('ih');
  expect(reverse('hi there')).toBe('ereht ih');
});
