# Calc library API

## sum(a,b)

Function returns the sum of 2 numbers. Numbers are passed as parameters a and b

- Parameters:
a number, between -500 and 500
b nubmer,  between -500 and 500

- Returns:
sum of a and b, between -1000 and 1000

_If parameter is missing, throws an exception_ `'parameter missing'`
_If parameters are NaN, throws an exception_ `'only numbers allowed'`
_If parametes are not in right interval, throws exception_ `'numbers not netween -500 and 500'`

## sum(a,b) Test cases

### sum with integers

sum(1,1) returns 2
sum(2,3) returns 5

a, b, result
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

### sum with floats

a, b, results
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

### parameter missing

sum() throw an exception `'parameter missing'`,
sum(1) throw an exception `'parameter missing'`,

### parameters are not numbers

sum('1', '2') throws an exception `'only numbers allowed'`,
sum('1', 2) throws an exception `'only numbers allowed'`,
sum(1, '2') throws an exception `'only numbers allowed'`,
sum('a', 'b') throws an exception `'only numbers allowed'`,
sum('', '') throws an exception `'only numbers allowed'`,
sum(true, true) throws an exception `'only numbers allowed'`,
sum(false, false) throws an exception `'only numbers allowed'`,
sum(true, false) throws an exception `'only numbers allowed'`,
sum(false, true) throws an exception `'only numbers allowed'`

### parameters not in -500 to 500

sum(1000, 400) throws exception `'numbers not netween -500 and 500'`,
sum(500, 501) throws exception `'numbers not netween -500 and 500'`,
sum(-500.1, 200) throws exception `'numbers not netween -500 and 500'`,
sum(300, 500.1) throws exception `'numbers not netween -500 and 500'`

## Subtract(a,b)

Function returns the difference a-b of two numbers. Numbers are passed as parameteres a and b

parameters:

a number, -500 <= a <= 500
b nubmer, -500 <= a <= 500

return difference a-b:

_If parameter is missing, throws an exception_ `'parameter missing'`
_If parameters are NaN, throws an exception_ `'only numbers allowed'`
_If parametes are not in right interval, throws exception_ `'numbers not netween -500 and 500'`

## Subtract(a,b) test cases

### subtract with integers

a, b, result
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

### subtract with floats

a, b, results
[10, 11.5, -1.5],
[2.5, 3, -0.5],
[-2.5, 3, -5.5],
[3, -2.5, 5.5],
[-2.5, -3, 0.5],
[-2.5, 2.5, 5],
[2.4, 2.5, -0.1],
[499.9, 500, -0.1],
[-499.9, -500, 0.1],
[-499.9, 500, -999.9]

### parameter missing

sub() throw an exception `'parameter missing'`,
sub(1) throw an exception `'parameter missing'`,

### parameters are not numbers

sub('1', '2') throws an exception `'only numbers allowed'`,
sub('1', 2) throws an exception `'only numbers allowed'`,
sub(1, '2') throws an exception `'only numbers allowed'`,
sub('a', 'b') throws an exception `'only numbers allowed'`,
sub('', '') throws an exception `'only numbers allowed'`,
sub(true, true) throws an exception `'only numbers allowed'`,
sub(false, false) throws an exception `'only numbers allowed'`,
sub(true, false) throws an exception `'only numbers allowed'`,
sub(false, true) throws an exception `'only numbers allowed'`

### parameters not in -500 to 500

sub(1000, 400) throws exception `'numbers not netween -500 and 500'`,
sub(500, 501) throws exception `'numbers not netween -500 and 500'`,
sub(-500.1, 200) throws exception `'numbers not netween -500 and 500'`,
sub(300, 500.1) throws exception `'numbers not netween -500 and 500'`