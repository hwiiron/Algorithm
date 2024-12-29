// 합성수 찾기

// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    // 1부터 n까지 반복
    let count = 0; // i의 약수 개수를 저장하는 변수

    for (let j = 1; j <= i; j++) {
      // 1부터 i까지 반복하며 약수 확인
      if (i % j == 0) {
        // i가 j로 나누어 떨어지면 약수
        count++;
      }
    }

    if (count >= 3) {
      // 약수 개수가 3개 이상이면 합성수
      answer++;
    }
  }
  return answer;
}

console.log(solution(10)); // 5
console.log(solution(15)); // 8
