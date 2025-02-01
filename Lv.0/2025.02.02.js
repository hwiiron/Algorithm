// 외계행성의 나이

// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  var answer = "";
  const arr = String(age).split(""); // 숫자를 문자열로 변환 후, 각 자릿수를 배열로 분할

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      answer += "a";
    } else if (arr[i] === "1") {
      answer += "b";
    } else if (arr[i] === "2") {
      answer += "c";
    } else if (arr[i] === "3") {
      answer += "d";
    } else if (arr[i] === "4") {
      answer += "e";
    } else if (arr[i] === "5") {
      answer += "f";
    } else if (arr[i] === "6") {
      answer += "g";
    } else if (arr[i] === "7") {
      answer += "h";
    } else if (arr[i] === "8") {
      answer += "i";
    } else if (arr[i] === "9") {
      answer += "j";
    }
  }

  return answer;
}

console.log(solution(23)); // "cd"
console.log(solution(51)); // "fb"
console.log(solution(100)); // "baa"
