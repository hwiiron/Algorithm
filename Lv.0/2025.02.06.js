// 중복된 문자 제거

// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고
// 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = "";

  // my_string 문자열 문자를 반복
  for (let i = 0; i < my_string.length; i++) {
    // my_string의 문자가 answer에 없다면 answer에 문자 추가
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("people")); // "peol"
console.log(solution("We are the world")); // "We arthwold"
