function solution(my_str) {
  const res = ['a', 'e', 'i', 'o', 'u'];
  return [...my_str].filter(v => !res.includes(v)).join('')
}
console.log(solution("nice to meet you"))