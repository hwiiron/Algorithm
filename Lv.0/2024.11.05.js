// 배열의 길이에 따라 다른 연산하기

// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr, n) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    // arr의 길이가 홀수일 때: 짝수 인덱스 위치에 n을 더함
    if (arr.length % 2 && i % 2 === 0) {
      answer.push(arr[i] + n);
    }
    // arr의 길이가 짝수일 때: 홀수 인덱스 위치에 n을 더함
    else if (arr.length % 2 === 0 && i % 2 === 1) {
      answer.push(arr[i] + n);
    }
    // 조건에 해당하지 않는 경우 원래 값 그대로 추가
    else {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
console.log(solution([444, 555, 666, 777], 100)); // [444, 655, 666, 877]
