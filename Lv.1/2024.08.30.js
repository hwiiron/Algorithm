// 내적

// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

function solution(a, b) {
  var answer = 0;
  
  // 배열의 길이만큼 반복문 실행
  for (let i = 0; i < a.length; i++) {
      answer += a[i] * b[i]; // a[i]와 b[i]를 곱하고 answer에 더하기
  }
  
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2