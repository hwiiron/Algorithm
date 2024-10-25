// 최댓값 만들기 (2)

// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let newNum = numbers.sort((a, b) => a - b); // numbers 배열을 오름차순으로 정렬

  let frontNum = newNum[0] * newNum[1]; // newNum 배열의 앞에서 가장 작은 두 개의 숫자를 곱하기
  let backNum = newNum[newNum.length - 2] * newNum[newNum.length - 1]; // newNum 배열의 뒤에서 가장 큰 두 개의 숫자 곱하기

  return frontNum < backNum ? backNum : frontNum;
  // 작은 수를 곱한 값과 큰 수를 곱한 값 중 더 큰 숫자를 리턴
  // 가장 작은 수여도 -와 -가 곱해졌을 때 더 큰수가 될 수 있음.
}

console.log(solution([1, 2, -3, 4, -5])); // 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600
