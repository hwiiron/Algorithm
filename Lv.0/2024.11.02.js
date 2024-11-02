// 정수 부분

// 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

function solution(flo) {
  // Math.floor() - 소수점 이하를 버리고 가장 가까운 아래 정수로 변환
  return Math.floor(flo);
}

console.log(solution(1.42)); // 1
console.log(solution(69.32)); // 69
