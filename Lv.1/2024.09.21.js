// 정수 제곱근 판별

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
  var answer = -1;
  
  let sqrt = Math.sqrt(n); // n의 제곱근 확인
  
  // 해결 1
  answer = Number.isInteger(sqrt) ? answer = (sqrt + 1) * (sqrt + 1) : answer;
  // sqrt(n의 제곱근)가 정수라면 좌측 값, 아니라면 -1 유지
  

  // 해결 2
  for (let i = 1; i <= sqrt; i++) { // i가 n의 제곱근보다 작거나 같을 때까지 반복
      if (i * i == n) { // i * i가 n과 같으면 n은 완전 제곱수
          answer = (i + 1) * (i + 1);
          break;
      }
  }
  
  return answer;
}

console.log(solution(121)) // 144
console.log(solution(3)) // -1