// 피자 나눠 먹기 (2)

// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
// 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

function solution(n) {
  // 초기값 1
  var answer = 1;

  // 1부터 n까지 반복문을 실행
  for (let i = 1; i <= n; i++) {
    // 현재 피자 판 수로 모든 사람이 동일한 조각을 나눠 먹을 수 있는지 확인
    if ((6 * answer) % n !== 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2
