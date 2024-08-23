// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0; // numbers 배열의 합을 저장할 변수
  
  for (let i = 0; i < numbers.length; i++) {
      answer += numbers[i]; // numbers 배열의 각 요소를 answer에 더함
  }
  
  return 45 - answer; // 0부터 9까지의 합인 45에서 numbers 배열의 합을 빼서 반환
}

console.log(solution([1,2,3,4,6,7,8,0])); // 14