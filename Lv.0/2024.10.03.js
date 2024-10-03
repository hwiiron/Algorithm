// 최댓값 만들기(1)

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;

  numbers.sort((a, b) => b - a); // number 배열을 내림차순으로 정렬
  answer = numbers[0] * numbers[1]; // 정렬된 배열의 0, 1 번째 요소를 곱하기

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // 20
console.log(solution([0, 31, 24, 10, 1, 9])); // 744
