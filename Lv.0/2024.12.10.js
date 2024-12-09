// l로 만들기

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다.
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  let answer = "";

  for (let i = 0; i < myString.length; i++) {
    // 입력 문자열의 각 문자를 반복
    if (myString[i] < "l") {
      // 현재 문자가 'l'보다 사전순으로 앞에 있는 경우
      answer += "l"; // 결과 문자열에 'l'을 추가
    } else {
      // 현재 문자가 'l'보다 크거나 같은 경우
      answer += myString[i]; // 원래 문자를 그대로 결과 문자열에 추가
    }
  }

  return answer;
}

console.log(solution("abcdevwxyz")); // "lllllvwxyz"
console.log(solution("jjnnllkkmm")); // "llnnllllmm"
