function solution(my_str) {
  return [...new Set(my_str)].join('');
}
console.log(solution("people"));