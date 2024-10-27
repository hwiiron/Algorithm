// 정수 찾기

// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      // n이 num_list 배열 안에 포함되어 있으면
      answer = 1; // answer은 1, 포함되지 않으면 기본 값인 0
    }
  }

  return answer;
}

console.log(solution()); // 1
console.log(solution()); // 0
