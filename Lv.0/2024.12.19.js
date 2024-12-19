// 특별한 이차원 배열 1

// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  var answer = [[]];

  for (let i = 0; i < n - 1; i++) {
    answer.push([]); // 빈 배열 추가
  }

  for (let i = 0; i < n; i++) {
    // 행 반복
    for (let j = 0; j < n; j++) {
      // 열 반복
      if (i === j) {
        answer[i].push(1); // 행 인덱스와 열 인덱스가 같으면 1 추가
      } else {
        answer[i].push(0); // 행 인덱스와 열 인덱스가 다르면 0 추가
      }
    }
  }

  return answer;
}

console.log(solution(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(solution(6)); // [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
console.log(solution(1)); // [[1]]
