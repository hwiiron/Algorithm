// 세 개의 구분자

// 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.
// 예를 들어 주어진 문자열이 "baconlettucetomato"라면
// 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
// 문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해
// 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며,
// return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.

function solution(myStr) {
  var answer = myStr.split(/[abc]/).filter((str) => str !== "");
  // 정규식으로 'a', 'b', 'c'를 기준으로 나눔

  return answer.length === 0 ? ["EMPTY"] : answer;
}

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // 	["EMPTY"]
