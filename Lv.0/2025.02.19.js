// 문자 개수 세기

// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
// my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수,
// my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를
// 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  var answer = new Array(52).fill(0);

  for (let char of my_string) {
    let code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      // 대문자 A-Z (ASCII 65-90)
      answer[code - 65]++;
    } else if (code >= 97 && code <= 122) {
      // 소문자 a-z (ASCII 97-122)
      answer[code - 97 + 26]++;
    }
  }

  return answer;
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
