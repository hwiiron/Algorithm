// 두 수의 연산값 비교하기

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

function solution(a, b) {
  // a와 b를 문자열로 변환 후, 두 문자열을 이어붙여 숫자로 변환
  const result1 = Number(String(a) + String(b));
  const result2 = 2 * a * b;

  // result1과 result2 중 더 큰 값을 반환
  return result1 > result2 ? result1 : result2;
}

console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
