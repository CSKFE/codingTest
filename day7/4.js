function solution(i, j, k) {
  let res = '';
  for(i; i <= j; i++) {
    res += i;
  }
  return res.split(k).length - 1
}
console.log(solution(1, 13 ,1));