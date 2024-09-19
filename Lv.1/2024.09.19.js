// 자연수 뒤집어 배열로 만들기

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
  return n.toString().split('').reverse().map(Number);
}

// 1.	n.toString() - 숫자를 문자열로 변환
// 2.	split('') - 문자열을 하나씩 쪼개어 배열 생성
// 3.	reverse() - 배열 뒤집기
// 4.	map(Number) - 배열의 각 문자를 숫자로 변환

console.log(solution(12345)); // [5, 4, 3, 2, 1]