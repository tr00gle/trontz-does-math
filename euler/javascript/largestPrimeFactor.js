function largestPrimeFactor(n) {
  let maxFactor = Math.floor(Math.sqrt(n));
  if (maxFactor % 2 === 0) maxFactor -= 1;
  for (let i = maxFactor; i >= 2; i -= 2) {
    if (n % i === 0 && isPrime(i)) return i;
  }
}

function isPrime(n) {
  const maxFactor = Math.floor(Math.sqrt(n));
  if (n % 2 === 0) return false;
  for (i = 3; i <= maxFactor; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log('answer:', largestPrimeFactor(600851475143))