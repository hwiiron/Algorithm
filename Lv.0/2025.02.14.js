// qr code

// 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(q, r, code) {
  var answer = "";

  for (let i = 0; i < code.length; i++) {
    //code 문자열의 문자를 반복
    if (i % q === r) {
      // code 인덱스를 q로 나눴을 때, 나머지가 r이라면
      answer += code[i]; // 해당하는 인덱스의 code 문자를 answer에 추가
    }
  }

  return answer;
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
console.log(solution(1, 0, "programmers")); // "programmers"
