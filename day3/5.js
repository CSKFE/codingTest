function solution(arr, dir) {
  // return dir === 'right' ? [arr[arr.length-1], ...arr].slice(0, -1) : [...arr, arr[0]].slice(1)
  return dir === 'right' ? arr.unshift(arr.pop()) : arr.push(arr.shift())
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], 'right'))