// 원하는 문자열 찾기

// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다.
// myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

function solution(myString, pat) {
  // myString, pat 문자열을 소문자로 변환
  // .includes()를 활용하여 mystring 문자열 안에 pat 문자열이 있는지 체크
  // 있으면 1, 없으면 0을 반환
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0
