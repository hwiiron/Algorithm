// 세로 읽기

// 문자열 my_string과 두 정수 m, c가 주어집니다.
// my_string을 한 줄에 m 글자씩 가로로 적었을 때왼쪽부터 세로로
// c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, m, c) {
  var answer = "";
  let arr = [];

  // 문자열을 m 개씩 잘라 배열에 저장
  for (let i = 0; i < my_string.length; i += m) {
    arr.push(my_string.slice(i, m + i));
  }

  // 각 잘린 문자열에서 c 번째 문자만 추출하여 answer에 추가
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i][c - 1];
  }

  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers"
