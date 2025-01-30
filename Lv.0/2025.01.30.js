// 배열 만들기 2

// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진
// 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    let str = String(i);
    let isValid = true; // "5"와 "0"으로만 이루어졌는지 확인

    for (let j = 0; j < str.length; j++) {
      if (str[j] !== "5" && str[j] !== "0") {
        isValid = false;
        break; // 다른 숫자가 나오면 중단
      }
    }

    if (isValid) {
      answer.push(i);
    }
  }

  return answer.length ? answer : [-1];
}

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
