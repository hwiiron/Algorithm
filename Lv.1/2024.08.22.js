// 콜라츠 추측

// 입력된 수가 짝수라면 2로 나눕니다.
// 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 주어진 수가 1인 경우에는 0을 반환하고
// 작업을 500번 반복할 때까지 1이 되지 않는다면 -1을 반환

// 위 작업을 몇번이나 반복해야 하는지 반환하는 함수를 완성하세요.

function solution(num) {
  if (num === 1) { // 입력된 수가 1이면 0 반환
    return 0;
  }

  for (let i = 0; i < 501; i++) {
    if (num === 1) { // num이 1이 되면 현재 반복 횟수 i 반환
      return i;
    } else if (i === 500) { // 반복 횟수가 500번에 도달하면 -1 반환
      return -1;
    } else if (num % 2 == 0) { // num이 짝수면
      num = num / 2; // 짝수일 경우 2로 나눈 후 다시 처음부터 if문 실행
    } else { // num이 홀수면
      num = (num * 3) + 1; // 홀수일 경우 3을 곱하고 1을 더한 후 다시 처음부터 if문 실행
    }
  }
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1