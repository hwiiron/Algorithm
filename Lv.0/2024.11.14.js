// A 강조하기

// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

function solution(myString) {
  var answer = "";
  for (let i = 0; i < myString.length; i++) {
    // myString 문자열을 순회하며
    if (myString[i] === "a") {
      // 문자열의 문자가 a이면
      answer += myString[i].toUpperCase(); // 문자를 대문자로 변환하고 answer에 추가
    } else if (myString[i] === "A") {
      // 문자열의 문자가 A이면
      answer += myString[i]; // 그대로 answer 추가
    } else {
      // a, A가 아니라면 나머지 모든 문자는 소문자로 변환 후, answer에 추가
      answer += myString[i].toLowerCase();
    }
  }
  return answer;
}

console.log(solution("abstract algebra")); // "AbstrAct AlgebrA"
console.log(solution("PrOgRaMmErS")); // "progrAmmers"
