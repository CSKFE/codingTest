1.js - 인덱스 바꾸기

문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

풀이
 - 초기 풀이
  const arr = [...my_str]
  const first = arr[n1]
  const second = arr[n2]
  arr[n1] = second
  arr[n2] = first
  return arr.join('')
 단순히 인덱스를 뽑아 변수에 할당 후 교체해서 반환했다.
 
 다른사람의 풀이를 보니 디스트럭처링 할당을 이용해서 문제를 해결했다.
  const arr = my_str.split('');
  [arr[n1], arr[n2]] = [arr[n2], arr[n1]];
  return arr.join('');
 - 매개변수로 받은 문자열을 배열로 반환하고 교체할 인덱스들을 디스트럭쳐링(구조분해 할당)으로 처리해 간단하게 처리 할 수 있다.

2.js - 세균증식

어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

풀이
  return x * (2**y)
 - 간단하다 x가 처음 세균의 마리 수다.
 - 세균은 시간마다 2배로 증가하니 2와 y의 제곱에 원래 세균 수를 곱해주면 된다

다른사람의 풀이를 보니 return x >> y  으로 했다..
비트연산자종류의 하나인데 설명을 들어도 잘 이해가 가지 않더라..

3.js - 암호해독

군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

풀이
  return [...my_string].filter((e, idx) => (idx + 1) % n === 0).join('')
 - 매개변수 my_string을 스프레드연산자로 배열로 변환해준다
 - filter메서드를 이용해서 인덱스 + 1(배수가 돼야하므로 idx가 0 부터 시작하면 무조건 0 이 포함된다)을 매개변수 n 으로 나눌때 나머지가 0인 인덱스를 모은 배열을 반환한다
 - join메서드를 이용해 다시 문자열로 변환해 반환해준다.

4.js 최댓값 구하기2

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요

풀이
  arr.sort((a, b) => a - b)
  return Math.max((arr[arr.length - 1] * arr[arr.length - 2]), (arr[0] * arr[1]))
  - 일단 매개변수로 받은 배열을 오름차순으로 정렬한다
  - 정렬된 배열의 제일 앞의 인덱스 두개의 값과, 제일 뒤에서 두개의 값을 곱한 값 중 Math.max로 큰 값을 리턴받는다
  - 앞의 두개의 인덱스를 곱하는 이유는 음수 두개를 곱하면 정수가 되기에, 만약 음수가 들어올 경우 제일 앞의 음수 두개를 곱한 값이 가장 큰 값일 수 있기 때문이다.

5.js - 배열 회전시키기

정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

풀이
  return dir === 'right' ? [arr[arr.length-1], ...arr].slice(0, -1) : [...arr, arr[0]].slice(1)
 - 매개변수가 right으로 들어오면 오른쪽으로 한 칸씩 이동해야한다
 - arr의 마지막 인덱스를 0번째로, 나머지를 스프레드로 복사 후 slice로 -1의 인덱스를 제거하면 오른쪽으로 한 칸씩 이동한 배열이 완성된다
 - 아닐경우는 왼쪽으로 한 칸씩 이동이다
 - 오른쪽과 동일한 방식으로 스프레드로 복사 후 arr의 0번째를 마지막에 붙혀주고 0 번째 인덱스를 제거하면 왼쪽으로 한 칸씩 이동한 배열이 된다.

다른 사람의 풀이를 보니 쓸데없이 장황하게 푼거같다.
간단하게 오른쪽으로 이동이면 마지막 인덱스가 첫 번째에 붙으면 되고, 왼쪽으로 이동이면 첫 번째 인덱스가 마지막 인덱스에 붙으면 된다.
머리로는 이해했는데 코드로 구현하기엔 미숙했던거같다.
간단히 shift, unshift, push, pop으로 해결이 가능했다.

6.js - 가장 큰 수 찾기

정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

풀이
  const max = Math.max(...arr);
  return [max,arr.indexOf(max)]
 - Math.max와 스프레드 연산자를 이용해서 매개변수로 받은 배열 중 가장 큰 값을 도출한다
 - 배열을 리턴해주고 리턴되는 배열의 value는 위에서 구한 최댓값과, 매개변수에 indexOf를 사용해 최댓값의 인덱스를 같이 리턴해준다.

7.js - 배열의 유사도
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

풀이
  return arr.filter(e => arr2.includes(e)).length;
 - 한 배열을 filter로 순회하며 필터링을한다.
 - 각 요소가 arr2안에 요소와 동일한지 includes로 탐색한다
 - 반한된 배열의 길이를 반환해준다.