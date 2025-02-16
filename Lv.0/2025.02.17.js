// 2의 영역

// 정수 배열 arr가 주어집니다.
// 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

function solution(arr) {
  var answer = [];
  var first = 0;
  var last = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      first = i; // 첫 번째 2의 인덱스를 저장
      break;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 2) {
      last = i; // 마지막 2의 인덱스를 저장
      break;
    }
  }

  if (first === 0 && last === 0) {
    // 2가 존재하지 않는 경우
    answer.push(-1);
  } else if (first === last) {
    // 2가 하나만 있는 경우
    answer.push(arr[first]);
  } else {
    // 2가 여러 개 있는 경우
    for (let i = first; i <= last; i++) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
