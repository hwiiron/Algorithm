// 평균 구하기

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  var answer = 0;
  
  for (let i = 0; i < arr.length; i++) { // 배열의 각 요소를 순회하면서 answer에 더함
      answer += arr[i];
  }
  
  return answer / arr.length; // 배열의 총합을 배열의 길이로 나누어 평균값을 반환
}

console.log(solution([1,2,3,4])); // 2.5
console.log(solution([5, 5])); // 5