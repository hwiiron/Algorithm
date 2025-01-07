// A로 B 만들기

// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
  const newBefore = before.split("").sort().join("");
  const newAfter = after.split("").sort().join("");
  // .split('') - 문자열을 배열로 변환
  // .sort() - 배열을 사전 순으로 정렬
  // .join('') - 배열을 문자열로 변환

  return newBefore === newAfter ? 1 : 0;
}

console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0
