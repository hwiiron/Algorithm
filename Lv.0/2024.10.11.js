// 원소들의 곱과 합

// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이
// 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  const sum = num_list.reduce((prev, current) => {
    // 배열의 모든 요소의 합을 계산
    return prev + current;
  }, 0);

  const multiply = num_list.reduce((prev, current) => {
    // 배열의 모든 요소의 곱을 계산
    return prev * current;
  }, 1);

  if (sum * sum > multiply) {
    // 합의 제곱이 곱보다 크면 1, 아니면 0을 반환
    return 1;
  } else {
    return 0;
  }
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0
