// 문자열 곱하기

// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, k) {
  var answer = "";
  for (let i = 1; i <= k; i++) {
    // k만큼 반복
    answer += my_string; // answer에 k만큼 반복해서 my_string 문자열 추가
  }
  return answer;
}

console.log(solution("string", 3)); // "stringstringstring"
console.log(solution("love", 10)); // "lovelovelovelovelovelovelovelovelovelove"
