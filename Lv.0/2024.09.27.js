// 자릿수 더하기

// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  var answer = 0;
  
  const arr = String(n); // n의 자릴수에 접근할 수 있게 문자열로 변환
  
  for (let i = 0; i < arr.length; i++) {
      answer += Number(arr[i]); // 문자열로 변환된 각 자릿수를 숫자로 변환하여 answer 더하기
  }
  
  return answer;
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16