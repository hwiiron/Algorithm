// 조건에 맞게 수열 변환하기 1

// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고,
// 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    // arr 배열을 순회
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      // arr 배열의 원소가 50보다 크거나 같고, 짝수라면
      answer.push(arr[i] / 2); // 2로 나눈 값을 answer 배열에 추가
    } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
      // arr 배열의 원소가 50보다 작고, 홀수라면
      answer.push(arr[i] * 2); // 2를 곱한 값을 answer 배열에 추가
    } else {
      answer.push(arr[i]); // 위 조건들에 해당되지 않으면 원래 원소를 answer배열에 추가
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [2, 2, 6, 50, 99, 49]
