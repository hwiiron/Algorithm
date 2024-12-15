//인덱스 바꾸기

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    // my_string 문자열의 문자 반복
    if (i === num1) {
      // 현재 위치 i가 num1이라면 num2 위치의 문자를 추가
      answer += my_string[num2];
    } else if (i === num2) {
      // 현재 위치 i가 num2라면 num1 위치의 문자를 추가
      answer += my_string[num1];
    } else {
      // 그 외의 경우 현재 위치의 문자 추가
      answer += my_string[i];
    }
  }
  return answer;
}

console.log(solution("hello", 1, 2)); // "hlelo"
console.log(solution("I love you", 3, 6)); // "I l veoyou"
