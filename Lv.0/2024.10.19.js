// 꼬리 문자열

// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다.
// 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다.
// 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(str_list, ex) {
  var answer = "";

  for (let i = 0; i < str_list.length; i++) {
    if (!str_list[i].includes(ex)) {
      // 문자열 리스트를 순회하며 문자열에 ex가 포함이 되어 있지 "않다면"
      answer += str_list[i]; // answer에 해당하는 str_list 문자열을 추가
    }
  }

  return answer;
}

console.log(solution(["abc", "def", "ghi"], "ef")); // "abcghi"
console.log(solution(["abc", "bbc", "cbc"], "c")); // 	""
