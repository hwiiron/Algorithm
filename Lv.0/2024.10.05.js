// 문자 반복 출력하기

// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    // 문자열의 각 문자를 반복
    for (j = 1; j <= n; j++) {
      // 각 문자를 n번 반복
      answer += my_string[i]; // 현재 문자를 n번 추가
    }
  }
  return answer;
}

console.log(solution("hello", 3)); // hhheeellllllooo
