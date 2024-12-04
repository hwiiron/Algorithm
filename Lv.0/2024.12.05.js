// 0 떼기

// 정수로 이루어진 문자열 n_str이 주어질 때,
// n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  var answer = "";
  var foundNonZero = false; // 0이 아닌 문자를 만났는지 여부

  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0" || foundNonZero) {
      foundNonZero = true; // 0이 아닌 문자를 만났음
      answer += n_str[i]; // 현재 문자 추가
    }
  }

  return answer;
}

console.log(solution("0010")); // "10"
console.log(solution("854020")); // "854020"
