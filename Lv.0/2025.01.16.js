// 종이 자르기

// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
// 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

function solution(M, N) {
  // M * N 크기의 종리를 1 x 1 크기로 자르려면
  // 총 M * N 개의 조각으로 나눠야 함
  // 한 번의 가위질로 종이가 두 개로 나뉘기 때문에
  // 총 조각 수에서 1을 뺀 값이 최소 가위질 횟수가 됨
  return M * N - 1;
}

console.log(solution(2, 2)); // 3
console.log(solution(2, 5)); // 9
console.log(solution(1, 1)); // 0
