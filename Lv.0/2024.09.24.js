// 카운트 다운

// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을
// 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
  var answer = [];
  
  for (let i = start_num; i >= end_num; i--) { // start_num부터 end_num까지 숫자를 감소시키며 반복
      answer.push(i); // 현재 숫자 i를 배열 answer에 추가
  }
  
  return answer;
}

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]