// 수박수박수박수박수박수?

// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  var answer = '';
  
  for (let i = 1; i <= n; i++) { // 1부터 n까지 반복문 실행
      if (i % 2 !== 0) { // 홀수인 경우 answer에 '수' 추가
          answer += '수';
      } else { // 짝수인 경우 answer에 '박' 추가
          answer += '박';
      }
  }
  
  return answer;
}

console.log(solution(3)); // 수박수
console.log(solution(4)); // 수박수박