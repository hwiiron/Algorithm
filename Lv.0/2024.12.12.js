// 문자열 정렬하기 (1)

// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라
// 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  var answer = [];
  const string = my_string.split(""); // 문자열 하나씩 배열에 추가

  for (let i = 0; i < string.length; i++) {
    // string 배열에 추가된 문자열을 반복
    if (!isNaN(string[i])) {
      // 문자인지 숫자인지 판별하여 숫자(false)라면
      answer.push(+string[i]); // answer 배열에 추가
    }
  }

  return answer.sort(); // answer 배열 오름차순 정렬
}

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]
