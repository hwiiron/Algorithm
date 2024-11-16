// 배열에서 문자열 대소문자 변환하기

// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때,
// 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로,
// 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  var answer = [];
  for (let i = 0; i < strArr.length; i++) {
    // strArr 베열을 순회
    if (i % 2) {
      // 홀수 인덱스이면
      answer.push(strArr[i].toUpperCase()); // 대문자로 변환
    } else {
      // 짝수 인덱스이면
      answer.push(strArr[i].toLowerCase()); // 소문자로 변환
    }
  }
  return answer;
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"])); // ["aaa","BBB","ccc","DDD"]
console.log(solution(["aBc", "AbC"])); // ["abc","ABC"]
