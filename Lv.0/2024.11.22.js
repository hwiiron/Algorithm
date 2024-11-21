// 점의 위치 구하기

// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

function solution(dot) {
  const x = dot[0] > 0;
  const y = dot[1] > 0;

  if (x && y) {
    // x > 0, y > 0: 1사분면
    return 1;
  } else if (!x && y) {
    // x < 0, y > 0: 2사분면
    return 2;
  } else if (!x && !y) {
    // x < 0, y < 0: 3사분면
    return 3;
  } else {
    // x > 0, y < 0: 4사분면
    return 4;
  }
}

console.log(solution([2, 4])); // 1
console.log(solution([-7, 9])); // 2
