function solution(arr) {
  const length = arr.length;
  const max = Math.max(...arr);
  return arr.every(() => max === length);
}

console.log(solution([1,4,3]));