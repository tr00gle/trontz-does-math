/*
Problem 4 
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function reversePositiveInteger(integer) {
  let num = integer;
  let reversedInteger = 0;
  while (num > 0) {
    reversedInteger = reversedInteger * 10 + num % 10
    num = Math.floor(num / 10);
  }
  return reversedInteger;
}

const getUnitsDigit = int => int % 10;

const removeUnitsDigit = int => Math.floor(int / 10);

const getMagnitude = num => Math.floor(Math.log10(num));

const getLeadingDigit = (num, magnitudeOfNum = getMagnitude(num)) => Math.floor(num / (10 ** magnitudeOfNum));

const removeLeadingDigit = num => {
  const powerOfTen = getMagnitude(num);
  const leadingDigit = getLeadingDigit(num, powerOfTen);
  return num - (leadingDigit * (10 ** powerOfTen));
}

const isNumberPalindrome = num => {
  let testNumber = num * (num < 0 ? -1 : 1);
  while (testNumber > 0) {
    const magnitude = getMagnitude(testNumber);
    const leadingDigit = getLeadingDigit(testNumber, magnitude);
    const unitsDigit = getUnitsDigit(testNumber);
    if (unitsDigit !== leadingDigit) {
      return false
    }
    testNumber = removeUnitsDigit(removeLeadingDigit(testNumber));
  }
  return true;
}



