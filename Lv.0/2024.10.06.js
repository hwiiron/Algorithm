// 문자열의 뒤의 n글자

// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  var answer = "";
  const stringLength = my_string.length; // 문자열의 길이를 변수에 저장
  for (let i = stringLength - n; i < stringLength; i++) {
    // 문자열의 끝에서 n개의 문자를 answer에 추가
    answer += my_string[i];
  }
  return answer;
}

console.log(solution("ProgrammerS123", 11)); // "grammerS123"
console.log(solution("He110W0r1d", 5)); // "W0r1d"
