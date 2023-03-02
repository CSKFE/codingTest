function solution(str) {
  let p = [...str].filter(e => e.toLowerCase().includes('p'));
  let y = [...str].filter(e => e.toLowerCase().includes('y'));
  return p.length === y.length ? true : false
}

console.log(solution("pPoooyY"))
