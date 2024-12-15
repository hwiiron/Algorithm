// 간단한 식 계산하기

// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수,
// op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
  const newArr = binomial.split(" "); // binomial 문자열을 공백 기준으로 나눠 배열로 변환
  const firstNum = Number(newArr[0]); // 변환된 배열의 첫 번째 요소를 숫자로 변환
  const lastNum = Number(newArr[2]); // 변환된 배열의 마지막 요소를 숫자로 변환

  // 배열의 두 번째 요소에 따라 계산
  if (newArr[1] === "+") {
    return firstNum + lastNum;
  } else if (newArr[1] === "-") {
    return firstNum - lastNum;
  } else if (newArr[1] === "*") {
    return firstNum * lastNum;
  } else {
    return firstNum % lastNum;
  }
}

console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 1600000000
