function solution(arr, n) {
  const res = Array.from(arr.toString()).findIndex(e => Number(e) === n);
  return res !== -1 ? res + 1 : -1;
}

console.log(solution(232443, 4));