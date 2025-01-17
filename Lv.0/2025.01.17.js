// 대소문자 바꿔서 출력하기

// 영어 알파벳으로 이루어진 문자열 str이 주어집니다.
// 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

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

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    // str 문자열을 반복
    if (/[a-z]/.test(str[i])) {
      // 정규식으로 str의 문자가 소문자인 경우
      newStr += str[i].toUpperCase(); // 대문자로 변환 후 newStr에 추가
    } else {
      newStr += str[i].toLowerCase(); // 소문자로 변환 후 newStr에 추가
    }
  }

  console.log(newStr);
});

// 입력
// aBcDeFg

// 출력
// AbCdEfG
