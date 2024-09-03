// 문자열 다루기 기본

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
}

// 주석 설명:
// 1. (s.length === 4 || s.length === 6):
//    s의 길이가 4 또는 6인 경우에만 true를 반환합니다.
//    즉, 문자열의 길이가 4 또는 6이 아니라면 false를 반환합니다.
//
// 2. /^\d+$/.test(s):
//    s가 숫자(0-9)로만 이루어져 있는지를 확인합니다.
//    ^ : 문자열의 시작
//    \d : 숫자 (0-9)
//    + : 숫자가 하나 이상 있어야 함
//    $ : 문자열의 끝
//
// 이 두 조건이 모두 true인 경우에만 전체적으로 true를 반환합니다.
// 그렇지 않으면 false를 반환합니다.

console.log(solution("a234")); // false
console.log(solution("1234")); // true