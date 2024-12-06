// 부분 문자열 이어 붙여 문자열 만들기

// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
// 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_strings, parts) {
  var answer = "";
  // my_strings 배열의 각 문자열 반복
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
    // 현재 문자열에서 parts[i][0]부터 parts[i][1]까지 부분 문자열을 추출
    // slice 메서드에서 끝 인덱스(parts[i][1])는 포함되지 않으므로 +1
  }
  return answer;
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
); // "programmers"
