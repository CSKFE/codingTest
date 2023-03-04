function solution(my_string, n) {
  return [...my_string].filter((e, idx) => (idx + 1) % n === 0).join('')
}

console.log(solution("pfqallllabwaoclk", 2))