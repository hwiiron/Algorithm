// 카운트 업

// 정수 start_num와 end_num가 주어질 때,
// start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end) {
  var answer = [];
  for (let i = start; i <= end; i++) {
    // start부터 end까지 순회하며 answer 배열에 담기
    answer.push(i);
  }
  return answer;
}

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
