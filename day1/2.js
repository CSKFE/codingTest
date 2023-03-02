function solution(arr, divisor) {
  const calc = arr.filter(e => e%divisor === 0).sort((a, b) => a - b)
  return calc.length !== 0 ? calc : [-1]
}
