// 뒤에서 5등 위로

// 정수로 이루어진 리스트 num_list가 주어집니다.
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = [];

  const list = num_list.sort((a, b) => a - b); // num_list 배열을 오름차순으로 정렬

  for (let i = 5; i < list.length; i++) {
    // 정렬된 배열에서 인덱스 5부터 끝까지의 요소를 answer에 추가
    answer.push(list[i]);
  }
  return answer;
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])); // [15, 32, 38, 46, 56]
