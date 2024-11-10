// 공백으로 구분하기 2

// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때,
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  var answer = [];
  const newString = my_string.split(" "); // 문자열을 공백을 기준으로 나누어 배열로 변환
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== "") {
      // 빈 문자열이 아닌 경우에
      answer.push(newString[i]); // 배열에 추가
    }
  }
  return answer; // 결과 반환
}

console.log(solution(" i    love  you")); // ["i", "love", "you"]
console.log(solution("    programmers  ")); // ["programmers"]
