// 가까운 수

// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  var num = array[0]; // 초기 데이터 설정
  var prevNum = Math.abs(array[0] - n); // 첫 번째 숫자와 n을 뺀 값(비교하기 위함)

  for (let i = 1; i < array.length; i++) {
    var currentNum = Math.abs(array[i] - n); // 현재 숫자와 n을 뺀 값

    if (currentNum < prevNum || (currentNum === prevNum && array[i] < num)) {
      num = array[i]; // 더 가까운 숫자로 업데이트
      prevNum = currentNum; // 이전 값도 업데이트
    }
  }

  return num;
}

console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
