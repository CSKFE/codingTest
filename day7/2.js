function solution(emergency) {
  let sorted = [...emergency].sort((a,b)=>b-a);
  return emergency.map(v => sorted.indexOf(v)+1);
}

console.log(solution([3, 76, 24]));
console.log(solution([30, 10, 23, 6, 100]));