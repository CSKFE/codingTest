function solution(arr, arr2) {
  return arr.filter(e => arr2.includes(e)).length;
}

console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]))