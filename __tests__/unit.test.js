// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test('Checks Real phone number is true', () => {
  expect(isPhoneNumber('(123) 456-7890)')).toBe(true);
});
test('Real number but wrong format', () => {
  expect(isPhoneNumber(1234567890)).toBe(false);
});
test('Checks real phone number without parenthesis', () => {
  expect(isPhoneNumber('123-456-7890)')).toBe(true);
});
test('Fails for 9 digit number', () => {
  expect(isPhoneNumber('(123) 456-789)')).toBe(false);
});

//isEmail
test('Is True for regular email', () => {
  expect(isEmail('io@gmail.com')).toBe(true);
});
test('Is False for email that does not have @', () => {
  expect(isEmail('iogmail.com')).toBe(false);
});
test('Is False for email that does not have .', () => {
  expect(isEmail('io@gmailcom')).toBe(false);
});
test('Is True for email with any length of username and email domain', () => {
  expect(isEmail('a@k.ty')).toBe(true);
});

//isStrongPassword
test('Is true for regular pass', () => {
  expect(isStrongPassword('IncogOwl')).toBe(true);
});
test('Is false for a pass of length 2', () => {
  expect(isStrongPassword('io')).toBe(false);
});
test('Is true for pass for length of 4', () => {
  expect(isStrongPassword('A113')).toBe(true);
});
test('Is false for pass with spaces', () => {
  expect(isStrongPassword(' ')).toBe(false);
});

//isDate
test('Is true for regular date', () => {
  expect(isDate('12/13/2024')).toBe(true);
});
test('Is false for wrong format', () => {
  expect(isDate(12/13/2024)).toBe(false);
});
test('Is true for random numbers in correct format', () => {
  expect(isDate('12/34/5678')).toBe(true);
});
test('Is false for no forward slashes', () => {
  expect(isDate('12132024')).toBe(false);
});

//isHexColor
test('Is true for correct hex code', () => {
  expect(isHexColor('#123')).toBe(true);
});
test('Is false for hex code longer than 6 digits', () => {
  expect(isHexColor(1234567)).toBe(false);
});
test('Is true for hex code without #', () => {
  expect(isHexColor('123')).toBe(true);
});
test('Is false for hex code with only #', () => {
  expect(isHexColor('#')).toBe(false);
});
