// 접두사인지 확인하기

// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을,
// 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_prefix) {
  // is_prefix가 my_string보다 길면 접두사가 될 수 없음
  if (my_string.length < is_prefix.length) {
      return 0;
  }
  
  for (let i = 0; i < is_prefix.length; i++) {
      if (my_string[i] !== is_prefix[i]) { // 한 글자씩 비교하여 다르다면 0 리턴
          return 0;
      }
  }
  
  return 1; // 모든 문자가 일치하면 접두사로 1 리턴
}

console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0