/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumMultiplesOfXAndYBelowZ(x, y, z) {
  return sumMultiplesOfXBelowY(x, z) 
    + sumMultiplesOfXBelowY(y, z) 
    - sumMultiplesOfXBelowY(x * y, z);
}
function sumMultiplesOfXBelowY(x, y) {
  const upperBound = Math.floor(y / x) - (y % x === 0 ? 1 : 0);
  return x * sumNaturalNumbersToN(upperBound);
}
function sumNaturalNumbersToN(n) {
  return n * (n + 1) / 2;
}

console.log('answer:', sumMultiplesOfXAndYBelowZ(3, 5, 1000));