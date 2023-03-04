function solution(arr) {
  const max = Math.max(...arr);
  return [max,arr.indexOf(max)]
}

console.log(solution([1, 8, 3]))