function solution2(n, x = 1) {
  while(x++) {
    if(n % x === 1) return x
  }
  return x
}

console.log(solution2(12))

