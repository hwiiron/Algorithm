// 주사위 게임 1

// 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다.
// 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.

// a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
// 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b) {
  const odd = a % 2; // a를 2로 나눈 나머지로 홀수 여부를 확인 (1이면 홀수, 0이면 짝수)
  const even = b % 2; // b를 2로 나눈 나머지로 홀수 여부를 확인 (1이면 홀수, 0이면 짝수)

  // a와 b가 모두 홀수일 경우
  if (odd && even) {
    return a * a + b * b; // a의 제곱과 b의 제곱을 더한 값을 반환
  }
  // a와 b 중 하나만 홀수일 경우
  else if (odd || even) {
    return 2 * (a + b); // a와 b의 합에 2를 곱한 값을 반환
  }
  // a와 b가 모두 짝수일 경우
  else {
    return Math.abs(a - b); // a와 b의 차의 절댓값을 반환
  }
}

console.log(solution(3, 5)); // 34
console.log(solution(6, 1)); // 14
console.log(solution(2, 4)); // 2
