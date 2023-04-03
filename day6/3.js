function solution(my_str, n) {
  const arr = [];
  const strArr = my_str.split('');
  while(strArr.length > 0) {
    arr.push(strArr.splice(0, n).join(''))
  } 
  return arr;
}
console.log(solution("abc1Addfggg4556b", 6));