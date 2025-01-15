// 영어가 싫어요

// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때,
// numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  let answer = "";
  let word = "";

  for (let i = 0; i < numbers.length; i++) {
    word += numbers[i]; // 한 글자씩 word에 추가

    if (word === "zero") {
      answer += "0";
      word = ""; // 매칭되면 word 초기화
    } else if (word === "one") {
      answer += "1";
      word = "";
    } else if (word === "two") {
      answer += "2";
      word = "";
    } else if (word === "three") {
      answer += "3";
      word = "";
    } else if (word === "four") {
      answer += "4";
      word = "";
    } else if (word === "five") {
      answer += "5";
      word = "";
    } else if (word === "six") {
      answer += "6";
      word = "";
    } else if (word === "seven") {
      answer += "7";
      word = "";
    } else if (word === "eight") {
      answer += "8";
      word = "";
    } else if (word === "nine") {
      answer += "9";
      word = "";
    }
  }

  return Number(answer);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
