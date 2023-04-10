function solution2(a, b) {
  let les = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for(let i = min; i <= max; i++) {
    les += i;
  }
  return min === max ? min : les;
}


console.log(solution2(3, 5));
console.log(solution2(3, 3));
console.log(solution2(5, 3));

