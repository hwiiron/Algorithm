// 문자열 섞기

// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

function solution(str1, str2) {
  var answer = "";

  for (let i = 0; i < str1.length; i++) {
    // str1의 문자와 str2의 문자를 하나씩 번갈아가며 answer에 추가
    answer += str1[i];
    answer += str2[i];
  }

  return answer;
}

console.log(solution("aaaaa", "bbbbb")); // "ababababab"
