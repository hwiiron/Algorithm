// 홀짝에 따라 다른 값 반환하기

// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    // n이 홀수일 경우
    if (n % 2 !== 0) {
      // 홀수 i만 더하기
      if (i % 2) {
        answer += i;
      }
    } else {
      // n이 짝수일 경우
      // 짝수 i의 제곱을 더하기
      if (i % 2 === 0) {
        answer += i * i;
      }
    }
  }
  return answer;
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220
