// 특수문자 출력하기

// 다음과 같이 출력하도록 코드를 작성해 주세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log(`!@#$%^&*(\\\'"<>?:;`);
});

// 출력 예시
// !@#$%^&*(\'"<>?:;

// "\"를 출력하려면 \"\"\ 이렇게 \로 감싸야지 출력이 가능함
