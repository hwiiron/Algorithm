// 문자열안에 문자열

// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
  // .includes()는 str1안에 str2가 있다면 true, 없다면 false를 반환하여 있으면 1, 없다면 2를 최종 리턴한다.
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
console.log(solution("AbcAbcA", "AAA")); // 2
