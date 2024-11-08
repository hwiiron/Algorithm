// rny_string

// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다.
// 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(rny_string) {
  var answer = "";
  for (let i = 0; i < rny_string.length; i++) {
    // rny_string 문자열을 순회합니다.
    if (rny_string[i] === "m") {
      // 문자열이 'm'이라면
      answer += "rn"; // rn으로 변경하여 answer에 추가합니다.
    } else {
      // 'm'이 아니라면
      answer += rny_string[i]; // 원래 문자열을 answer에 추가합니다.
    }
  }
  return answer;
}

console.log(solution("masterpiece")); // "rnasterpiece"
console.log(solution("programmers")); // 	"prograrnrners"
console.log(solution("jerry")); // "jerry"
console.log(solution("burn")); // "burn"
