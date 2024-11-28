// n 번째 원소까지

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의
// 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    // num_list 배열의 n번째 인덱스까지 순회하면서
    answer.push(num_list[i]); // answer 배열에 추가
  }
  return answer;
}

console.log(solution([2, 1, 6], 1)); // [2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [5, 2, 1]
