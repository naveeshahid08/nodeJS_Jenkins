'use strict';

const {sub} = require('../calclibrary');

describe('Testing subtract with intergers', () => {
  const testValues = [
    [  -2,   -4,     2],
    [  -2,    4,    -6],
    [   2,   -4,     6],
    [   0,    0,     0],
    [   0,    3,    -3],
    [   2,    0,     2],
    [   0,   -2,     2],
    [  -1,    0,    -1],
    [ 123,  200,   -77],
    [-500, -500,     0],
    [ 500,  500,     0],
    [ 500, -500,  1000],
    [-500,  500, -1000]
  ];

  test.each(testValues)('sub(%s, %s) = %s', (a, b, result) => {
    expect(sub(a,b)).toBe(result);
  });
});

describe('Testing with floats', () => {
  const testValues = [
    [10, 11.5, -1.5],
    [2.5, 3, -0.5],
    [-2.5, 3, -5.5],
    [3, -2.5, 5.5],
    [-2.5, -3, 0.5],
    [-2.5, 2.5, -5],
    [2.4, 2.5, -0.1],
    [499.9, 500, -0.1],
    [-499.9, -500, 0.1],
    [-499.9, 500, -999.9]
  ];

  test.each(testValues)('sub(%s, %s) = %s', (a, b, result) => {
    expect(sub(a,b)).toBeCloseTo(result);
  });
});

describe('Testing missing parameters', () => {
  test('sub() throws an exception', () => {
    expect(() => sub()).toThrow('parameter missing');
  });

  test('sub(1) throws an exception', () => {
    expect(() => sub(1)).toThrow('parameter missing');
  })
});

describe('Testing NaN', () => {
  const testValues = [
    ['1', '2'],
    ['1', 2],
    [1, '2'],
    ['a', 'b'],
    ['', ''],
    [true, true],
    [false, false],
    [true, false],
    [false, true]
  ];

  test.each(testValues)('sub(%s, %s) throw NaN exception', (a, b) => {
    expect(() => sub(a, b)).toThrow('only numbers allowed');
  });
});

describe('Parameter not between -500 and 500', () => {
  const testValues = [
    [100, 501],
    [500,501],
    [-500.1, 200],
    [300, 500.1],

  ];

  test.each(testValues)('sub(%s, %s) throw out of bound exception', (a, b) => {
    expect(() => sub(a, b)).toThrow('numbers not netween -500 and 500');
  });
})