function solution(arr) {
  arr.sort((a, b) => a - b)
  return Math.max((arr[arr.length - 1] * arr[arr.length - 2]), (arr[0] * arr[1]))
}

console.log(solution([1, 2, -3, 4, -5]))