'use strict';

const {sum} = require('../calclibrary');

describe('Testing sum with intergers', () => {
  test('sum(1,1) returns 2', () => {
    expect(sum(1,1)).toBe(2);
  });

  test('sum(2,3) returns 5', () => {
    expect(sum(2,3)).toBe(5);
  });

  const testValues = [
    [-2, -4, -6],
    [-2,  4,  2],
    [ 2, -4, -2],
    [ 0,  0,  0],
    [ 0,  3,  3],
    [ 2,  0,  2],
    [ 0, -2, -2],
    [-1,  0, -1],
    [123, 200, 323],
    [-500, -500, -1000],
    [500, 500, 1000],
    [500, -500, 0],
    [-500, 500, 0]
  ];

  test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => {
    expect(sum(a,b)).toBe(result);
  });
});

describe('Testing with floats', () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
    [499.9, 500, 999.9],
    [-499.9, -500, -999.9],
    [-499.9, 500, 0.1]
  ];

  test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => {
    expect(sum(a,b)).toBeCloseTo(result);
  });
});

describe('Testing missing parameters', () => {
  test('sum() throws an exception', () => {
    expect(() => sum()).toThrow('parameter missing');
  });

  test('sum(1) throws an exception', () => {
    expect(() => sum(1)).toThrow('parameter missing');
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

  test.each(testValues)('sum(%s, %s) throw NaN exception', (a, b) => {
    expect(() => sum(a, b)).toThrow('only numbers allowed');
  });
});

describe('Parameter not between -500 and 500', () => {
  const testValues = [
    [100, 501],
    [500,501],
    [-500.1, 200],
    [300, 500.1],

  ];

  test.each(testValues)('sum(%s, %s) throw out of bound exception', (a, b) => {
    expect(() => sum(a, b)).toThrow('numbers not netween -500 and 500');
  });
})