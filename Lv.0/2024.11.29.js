// 순서 바꾸기

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과n 번째까지의 원소들로 나눠
// n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = [];

  for (let i = n; i < num_list.length; i++) {
    // n번째 인덱스부터 마지막 인덱스까지 순회하면서
    answer.push(num_list[i]); // answer 배열에 요소 추가
  }

  for (let i = 0; i < n; i++) {
    // 처음부터 n-1번째 인덱스까지 순회하면서
    answer.push(num_list[i]); // answer 배열에 요소 추가
  }

  return answer;
}

console.log(solution([2, 1, 6], 1)); //	[1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
