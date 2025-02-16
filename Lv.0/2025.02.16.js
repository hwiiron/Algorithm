// 컨트롤 제트

// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
// 문자열에 있는 숫자를 차례대로 더하려고 합니다.
// 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 "Z"로 이루어진 문자열 s가 주어질 때,
// 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
  var answer = 0;
  var newArr = s.split(" "); // 문자열을 공백(" ") 기준으로 나누어 배열로 변환

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== "Z") {
      // "Z"가 아닌 경우 숫자로 변환하여 더하기
      answer += Number(newArr[i]);
    } else if (newArr[i] === "Z") {
      // "Z"가 나오면 직전 숫자를 빼기
      answer -= Number(newArr[i - 1]);
    }
    ㄴ;
  }
  return answer; // 최종 계산된 값 반환
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // 3
