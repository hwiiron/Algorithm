// n의 배수

// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num, n) {
  return num % n ? 0 : 1; // num을 n으로 나눴을 때, 나머지가 있으면 0, 없으면 0을 반환
}

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
