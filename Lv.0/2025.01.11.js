// 잘라서 배열로 저장하기

// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  var answer = [];
  let number = 0;

  // 문자열 길이를 n으로 나눈 만큼 반복
  for (let i = 0; i < my_str.length / n; i++) {
    // 문자열을 number부터 number + n까지 슬라이스하여 배열에 추가
    answer.push(my_str.slice(number, number + n));
    // 슬라이스 시작 위치를 n만큼 증가
    number += n;
  }

  return answer; // 결과 배열 반환
}

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
