// 3진법 뒤집기

// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = [];
  let result = 0;
  
  while (n > 0) { // 10진수를 3진법으로 변환
      answer.push(n % 3); // n을 3으로 나눈 나머지를 배열에 저장
      n = Math.floor(n / 3); // n을 3으로 나눈 몫
  }
  
  answer.reverse();
  
  for (let i = 0; i < answer.length; i++) { // 다시 10진법으로 변환
      result += answer[i] * (3 ** i); // 각 자릿수에 3의 거듭 제곱을 곱한 후 더함
  }
  
  return result;
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229