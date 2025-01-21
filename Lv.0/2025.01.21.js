// 문자열 밀기

// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
// 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
// A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
  if (A === B) return 0; // A와 B가 동일하면 0 반환

  const n = A.length;

  // A를 오른쪽으로 한 칸씩 회전하며 비교
  for (let i = 1; i <= n; i++) {
    A = A.slice(-1) + A.slice(0, -1); // 마지막 문자를 앞으로 이동
    if (A === B) return i; // 동일한 경우 회전 횟수 반환
  }

  return -1; // 끝까지 같아지지 않으면 -1 반환
}

console.log(solution("hello", "ohell")); // 1
console.log(solution("apply", "elppa")); // -1
console.log(solution("atat", "tata")); // 1
console.log(solution("abc", "abc")); // 0
