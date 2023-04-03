function solution(s) {
  const arr = [];
  s = s.split(' ');
  for(const a of s) {
    a === 'Z' ? arr.pop() : arr.push(a);
  }
  return arr.reduce((acc, val) => Number(acc) + Number(val), 0);
}

console.log(solution("-1 -2 -3 Z"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("1 2 Z 3"));