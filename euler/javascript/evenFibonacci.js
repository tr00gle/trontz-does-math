/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function sumEvenFibTermsBelowX(x) {
  let sum = 0;
  let nthMinusOne = 1;
  let nthMinusTwo = 1;
  let nth = 0;
  while (n < x) {
    nth = nthMinusOne + nthMinusTwo;
    if (nth % 2 === 0) sum += nth;
    nthMinusTwo = nthMinusOne;
    nthMinusOne = nth;
  }
  return sum;
}

console.log("answer:", sumEvenFibTermsBelowX(4000000))