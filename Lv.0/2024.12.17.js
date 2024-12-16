// 가까운 1 찾기

// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때,
// idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

function solution(arr, idx) {
  var answer = 0;
  for (let i = idx; i < arr.length; i++) {
    // idx부터 배열의 끝까지 반복
    if (arr[i] === 1) {
      // 현재 인덱스 값이 1인 경우
      answer = i; // 해당 인덱스를 answer에 저장
      break; // 반복문 종료 (첫 번째 1을 찾아서 반복 종료)
    } else {
      answer = -1; // 값이 1이 아니면 answer에 -1 저장
    }
  }
  return answer;
}

console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3
