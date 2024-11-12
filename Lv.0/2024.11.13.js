// 특정한 문자를 대문자로 바꾸기

// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때,
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, alp) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    // 문자열을 순회하며 문자가 alp 문자와 같다면 대문자로 변환 후 answer에 추가
    my_string[i] === alp
      ? (answer += my_string[i].toUpperCase())
      : (answer += my_string[i]); // 문자가 alp 문자와 같지 않다면 원래 문자를 그대로 추가
  }
  return answer;
}

console.log(solution("programmers", "p")); // "Programmers"
console.log(solution("lowercase", "x")); // "lowercase"
