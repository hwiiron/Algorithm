// 숨어있는 숫자의 덧셈 (2)

// 문자열 my_string이 매개변수로 주어집니다.
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = 0;

  // 문자열에서 숫자가 아닌 모든 문자를 ','로 변경한 후, ','를 기준으로 문자열을 나눔
  my_string = my_string.replace(/[^0-9]/g, ",").split(",");
  console.log(my_string);

  // 배열을 반복하며 숫자 값들을 더함
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === "") {
      // 빈 문자열이면 건너뜀
      continue;
    } else {
      answer += Number(my_string[i]); // 숫자로 변환 후 더하기
    }
  }

  return answer;
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
