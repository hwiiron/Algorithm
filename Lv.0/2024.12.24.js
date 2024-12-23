// 9로 나눈 나머지

// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때,
// 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length; i++) {
    // 문자열 number 문자를 반복
    answer += Number(number[i]); // 문자를 숫자로 변환 후 answer에 더하기
  }

  return answer % 9; // answer의 값을 9로 나눈 나머지를 리턴
}

console.log(solution()); //
console.log(solution()); //
