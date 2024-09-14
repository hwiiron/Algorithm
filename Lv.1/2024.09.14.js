// 짝수와 홀수

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution(num) {
  var answer = '';
  
  // num을 2로 나눴을 때 나머지가 1이면 "Odd", 나머지가 0이면 "Even"
  // 삼항 연산자에서 나머지가 1이면 true로 왼쪽 값이 출력되고, 0이면 false로 오른쪽 값이 출력된다.
  return answer = num % 2 ? "Odd" : "Even";
}

console.log(solution(3)); // Odd
console.log(solution(4)); // Even