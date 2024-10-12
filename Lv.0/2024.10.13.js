// 더 크게 합치기

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

function solution(a, b) {
  // a, b 문자열로 변환
  const result1 = String(a);
  const result2 = String(b);

  // 숫자가 아닌 문자열을 합친 값을 비교하여
  // 더 큰 값을 가진 쪽을 숫자로 변환하여 반환
  if (result1 + result2 > result2 + result1) {
    return Number(result1 + result2);
  } else if (result1 + result2 < result2 + result1) {
    return Number(result2 + result1);
  } else {
    // 두 값이 같으면
    return Number(result1 + result2);
  }
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
