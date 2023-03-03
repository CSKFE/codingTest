function solution(num) {
  let five = Math.floor(num / 5)
  let three = Math.floor((num - five * 5) / 3)
  let one = num - five * 5 - three * 3
  return (five + three + one)
}

console.log(solution(999))