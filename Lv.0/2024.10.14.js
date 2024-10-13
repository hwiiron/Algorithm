// 문자 리스트를 문자열로 변환하기

// 문자들이 담겨있는 배열 arr가 주어집니다.
// arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

function solution(arr) {
  return arr.join("");
}

// join() 메소드는 배열의 요소를 하나의 문자열로 반환하는 메소드이다.

console.log(solution(["a", "b", "c"])); // "abc"
