// 하샤드의 수

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
  var answer = 0;
  
  const str = String(x).split(''); // x를 문자열로 변환한 후, 배열로 변환
  
  for(let i = 0; i < str.length; i++) { // 각 자릿수를 순회하면서 숫자로 변환 후 answer에 더하기
      answer += Number(str[i]);
  }
  
  return x % answer ? false : true; // x가 answer로 나누어떨어지면 true, 그렇지 않으면 false 반환
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false