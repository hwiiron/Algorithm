// 문자열 정렬하기 (2)

// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
  // my_string을 소문자로 변환
  // split()을 활용하여 my_string을 배열로 변환
  // 배열을 알파벳 순으로 정렬
  // 배열을 문자열로 합치기
}

console.log(solution("Bcad")); // "abcd"
console.log(solution("heLLo")); // "ehllo"
console.log(solution("Python")); // "hnopty"
