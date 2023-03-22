function solution(n) {
  return String(n).split('').filter(e => ['3','6','9'].includes(e)).length;
}

console.log(solution(29423));