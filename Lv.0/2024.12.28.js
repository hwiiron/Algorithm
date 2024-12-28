// 글자 지우기

// 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에
// 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, indices) {
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    // my_string 문자열을 반복
    if (!indices.includes(i)) {
      // 현재 인덱스 i가 indices 배열에 포함되지 않는다면
      answer += my_string[i]; // 해당 인덱스의 문자를 answer에 추가
    }
  }

  return answer;
}

console.log(solution()); //
