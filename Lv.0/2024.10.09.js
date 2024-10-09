// 마지막 두 원소

// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서
// 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  const length = num_list.length - 1; // 배열의 마지막 인덱스

  if (num_list[length] > num_list[length - 1]) {
    // 마지막 요소가 그 이전 요소보다 크면
    num_list.push(num_list[length] - num_list[length - 1]); // (마지막 요소 - 이전 요소)를 배열에 추가
  } else {
    num_list.push(num_list[length] * 2); // 그렇지 않으면, (마지막 요소 * 2)를 배열에 추가
  }

  return num_list;
}

console.log(solution([2, 1, 6])); // 	[2, 1, 6, 5]
console.log(solution([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]
