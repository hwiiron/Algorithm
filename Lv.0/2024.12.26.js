// 덧셈식 출력하기

// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    String(input[0]) +
      " + " +
      String(input[1]) +
      " = " +
      (Number(input[0]) + Number(input[1]))
  );
});

console.log(solution(4, 5)); // 4 + 5 = 9
