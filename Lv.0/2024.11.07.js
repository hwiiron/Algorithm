// 배열의 원소만큼 추가하기

// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때,
// arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    // arr 배열의 원소 값을 추출
    for (let j = 0; j < arr[i]; j++) {
      // 배열의 원소 수 만큼 answer 배열에 추가
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
console.log(solution([6, 6])); // [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(solution([1])); // [1]
