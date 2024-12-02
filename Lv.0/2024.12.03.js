// 접미사인지 확인하기

// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을,
// 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_suffix) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.slice(i, my_string.length) === is_suffix) {
      // my_string의 i번째 인덱스부터 끝까지 잘라낸 부분 문자열이 is_suffix와 같은지 확인
      answer = 1; // 같다면 answer를 1로 설정
    }
  }
  return answer;
}

console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "wxyz")); // 0
console.log(solution("banana", "abanana")); // 0
