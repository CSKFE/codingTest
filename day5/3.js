function solution(str) {
  return Function(`return ${str}`)();
}

// console.log(solution('3 + 5'));
console.log(solution('3 - 5'));
