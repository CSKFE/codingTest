function solution(age) {
  const res = ['a','b','c','d','e','f','g','h','i','j'];
  return String(age).split('').map(e => res[Number(e)]).join('');
}

console.log(solution(23));