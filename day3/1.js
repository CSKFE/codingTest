function solution(my_str, n1, n2) {
  const arr = my_str.split('');
  [arr[n1], arr[n2]] = [arr[n2], arr[n1]];
  return arr.join('');
  
}

console.log(solution("hello", 1, 2))