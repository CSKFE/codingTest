function solution(my_string) {
  return [...my_string].filter(e => !isNaN(e)).map(e => Number()).sort((a,b) => a - b)
}

console.log(solution("abcde0"))