// 한 번만 등장한 문자

// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을
// return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  const newArr = s.split(""); // 문자열을 배열로 변환
  let result = "";

  for (let i = 0; i < s.length; i++) {
    // 현재 문자가 배열에서 몇 번 나왔는지 계산
    const length = newArr.filter((t) => t === s[i]).length;

    if (length === 1) {
      result += s[i];
    }
  }

  return result.split("").sort().join(""); // 결과 문자열을 사전 순으로 정렬
}

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"
