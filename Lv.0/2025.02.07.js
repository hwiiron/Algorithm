// 모스부호 (1)

// 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
// 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다.
// 문자열 letter가 매개변수로 주어질 때,
// letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// 모스부호는 다음과 같습니다.

function solution(letter) {
  var answer = "";
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  const newArr = letter.split(" "); // 공백을 기준으로 배열로 변환

  for (let i = 0; i < newArr.length; i++) {
    // 각 모스부호를 변환하여 answer에 추가
    answer += morse[newArr[i]];
  }

  return answer;
}

console.log(solution(".... . .-.. .-.. ---")); // "hello"
console.log(solution(".--. -.-- - .... --- -.")); // "python"
