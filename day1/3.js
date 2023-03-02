function solution(num) {
  let res = [];
  for(let i = 0; i <= num; i++) {
    res.push(num % i === 0)
  }
  return res.filter(e => e).length
}
console.log(solution(20))
// console.log(solution(20))