// 배열 원소의 길이

// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

function solution(strlist) {
  var answer = [];
  
  for (let i = 0; i < strlist.length; i++) { // strlist의 각 문자열을 순차적 접근
      answer.push(strlist[i].length); // 각 문자열의 길이를 구해서 배열에 추가
  }
  
  return answer;
}

console.log(solution(["We", "are", "the", "world!"])) // [2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])) // [1, 4, 12]