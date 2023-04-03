function solution(arr) {
  return arr.join('').split('').filter(e => e === '7').length;
}

console.log(solution([7, 77, 17]));