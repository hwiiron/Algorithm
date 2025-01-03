// 문자열이 몇 번 등장하는지 세기

// 문자열 myString과 pat이 주어집니다.
// myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  var answer = 0;

  // myString.length - pat.length를 해주는 이유는 pat의 길이만큼만 비교하면 되기 때문
  for (let i = 0; i <= myString.length - pat.length; i++) {
    let string = myString.slice(i, i + pat.length); // pat의 길이만큼씩 잘라서 비교
    if (string === pat) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("banana", "ana")); // 2
console.log(solution("aaaa", "aa")); // 3
