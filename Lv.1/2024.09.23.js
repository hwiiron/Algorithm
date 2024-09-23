// 두 정수 사이의 합

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  var answer = 0;
  let arr = [a, b].sort((a, b) => a - b); // a, b를 배열로 만들어서 오름차순 정렬, a가 더 클 경우 반복문에서 문제로 오름차순 정렬
  
  for (let i = arr[0]; i <= arr[1]; i++) {
      answer += i; // a, b까지 숫자를 반복하면서 answer에 더하기
  }
  
  return answer;
}

console.log(solution(3, 5)) // 12
console.log(solution(3, 3)) // 3
console.log(solution(5, 3)) // 12