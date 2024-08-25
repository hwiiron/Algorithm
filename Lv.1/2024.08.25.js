// 나누어 떨어지는 숫자 배열

// array의 각 element 중 divisor로 나누어 떨어지는 값을
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  var answer = [];
  
  // 배열 arr를 오름차순으로 정렬하여 arr2에 저장
  let arr2 = arr.sort(function (a, b) {return a - b;});
  
  // arr의 각 요소를 순회하며 divisor로 나누어 떨어지는지 확인
  for (let i = 0; i < arr.length; i++) {
      if (arr2[i] % divisor == 0) {
          // 나누어 떨어지는 경우 answer 배열에 추가
          answer.push(arr2[i]);
      }
  }
  
  // 나누어 떨어지는 값 없이 answer 배열이 비어있으면 [-1]을 반환
  if (answer.length == 0) {
      answer = [-1];
  }
  
  return answer;
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]