function solution(str) {
  return [...str].map(e => e.toLowerCase()).sort();
}

console.log(solution("Python"));