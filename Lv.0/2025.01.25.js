// 문자열 돌리기

// 문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  str.split("").forEach((str) => console.log(str));
  // .split("")으로 배열로 변환
  // .forEach로 순서대로 출력
});

// 입력
// abcde

// 출력
// a
// b
// c
// d
// e
