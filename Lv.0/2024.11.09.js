// 문자열 바꿔서 찾기

// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다.
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면
// 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

function solution(myString, pat) {
  var answer = 0;
  let text = "";
  for (let i = 0; i < myString.length; i++) {
    // myString 문자열을 순회하며
    if (myString[i] === "A") {
      // 문자열의 문자가 A라면
      text += "B"; // B로
    } else {
      // 문자가 B라면
      text += "A"; // A로 변환
    }
  }

  answer = text.includes(pat) ? 1 : 0; // 변환된 문자열 안에 pat이 존재하면 1, 존재하지 않으면 0 반환

  return answer;
}

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0
