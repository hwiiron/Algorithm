// 길이에 따른 연산

// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을
// 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = num_list.length >= 11 ? 0 : 1; // num_list 배열의 원소 갯수가 11이상이면 0, 10이하이면 1로 설정

  for (let i = 0; i < num_list.length; i++) {
    // num_list 배열을 순휘
    if (num_list.length >= 11) {
      // num_list 배열의 원소 갯수가 11이상이면
      answer += num_list[i]; // 원소를 모두 더하기
    } else if (num_list.length <= 10) {
      // num_list 배열의 원소 갯수가 10이하면
      answer *= num_list[i]; // 원소를 모두 곱하기
    }
  }

  return answer;
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120
