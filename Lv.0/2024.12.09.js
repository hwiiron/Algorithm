// x 사이의 개수

// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때
// 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  var answer = [];
  const splitString = myString.split("x"); // 문자열을 "x" 기준으로 나누어 배열로 만듦
  for (let i = 0; i < splitString.length; i++) {
    answer.push(splitString[i].length); // 각 문자열의 길이를 배열에 추가
  }
  return answer;
}

console.log(solution()); //
console.log(solution()); //
