// 문자열의 앞의 n글자

// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  var answer = '';
  
  for (let i = 0; i < n; i++) { // my_string의 첫 n개의 문자를 하나씩 answer에 추가
      answer += my_string[i];
  }
  
  return answer;
}

function solution(my_string, n) {
  var answer = '';  // 결과를 저장할 빈 문자열 선언
  
  // my_string의 첫 n개의 문자를 하나씩 answer에 추가
  for (let i = 0; i < n; i++) {
      answer += my_string[i];
  }
  
  return answer;  // 결과 반환
}

console.log(solution("ProgrammerS123", 11)) // "ProgrammerS"
console.log(solution("He110W0r1d", 5)) // "He110"
