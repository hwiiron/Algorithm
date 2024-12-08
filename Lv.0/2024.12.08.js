// ad 제거하기

// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  var answer = [];

  for (let i = 0; i < strArr.length; i++) {
    // strArr 배열을 반복
    if (strArr[i].includes("ad")) {
      // 현재 문자열에 "ad"가 포함되어 있다면
      continue; // 해당 문자열을 건너뛰고 다음 반복으로 넘어감
    }
    answer.push(strArr[i]); // "ad"가 포함되지 않은 문자열을 answer 배열에 추가
  }

  return answer;
}

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there", "are", "no", "a", "ds"])); // ["there","are","no","a","ds"]
