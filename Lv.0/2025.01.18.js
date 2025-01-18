// 문자열 계산하기

// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때,
// 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
  const tokens = my_string.split(" ");

  // 첫 번째 숫자를 초기 결과값으로 설정
  let result = parseInt(tokens[0]);

  // tokens 배열의 length만큼 반복
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseInt(tokens[i + 1]); // 현재 연산자의 다음 숫자

    if (operator === "+") {
      result += operand; // 더하기 연산
    } else if (operator === "-") {
      result -= operand; // 빼기 연산
    }
  }

  return result;
}

console.log(solution("3 + 4")); // 7
