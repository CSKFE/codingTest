function solution(my_string) {
  // return [...my_string].map(e => e.charCodeAt(0).toString(10))
  return [...my_string].map(e => e.charCodeAt(0).toString(10) < 96 ? e.toLowerCase() : e.toUpperCase()).join('')
}

console.log(solution('abCdEfghIJ'))