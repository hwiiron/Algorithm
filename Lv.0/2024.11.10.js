// 모음 제거

// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = "";
  const string = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < my_string.length; i++) {
    // 모음이 아니라면 answer에 추가
    if (!string.includes(my_string[i])) {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("bus")); // "bs"
console.log(solution("nice to meet you")); // "nc t mt y"
