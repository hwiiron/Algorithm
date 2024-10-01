// flag에 따라 다른 값 반환하기

// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때,
// flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, flag) {
  var answer = 0;

  // 방법 1
  // flag가 true면 a, b를 더하고, false면 a, b를 뺀다
  if (flag) {
    answer = a + b;
  } else {
    answer = a - b;
  }

  // 방법 2
  // answer = flag == true ? a + b : a - b;

  return answer;
}

console.log(solution(-4, 7, true)); // 3
console.log(solution(-4, 7, false)); // -11
