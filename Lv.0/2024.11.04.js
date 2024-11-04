// 뒤에서 5등까지

// 정수로 이루어진 리스트 num_list가 주어집니다.
// num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = [];

  const sortedNum = num_list.sort((a, b) => a - b); // num_list 배열을 오름차순으로 정렬

  for (let i = 0; i < 5; i++) {
    // 정렬된 배열에서 인덱스 0부터 4까지의 요소를 answer에 추가
    answer.push(sortedNum[i]);
  }

  return answer;
}

console.log(solution([12, 4, 15, 46, 38, 1, 14])); // [1, 4, 12, 14, 15]
