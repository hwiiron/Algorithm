// 정수 내림차순으로 배치하기

// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}

// 1.	n.toString() - 숫자를 문자열로 변환
// 2.	split('') - 문자열을 하나씩 쪼개어 배열 생성
// 3.	sort((a, b) => b - a) - 배열 내림차순 정렬
// 4.	join() - 배열을 문자열로 변환
// 5. Number() - 문자열을 숫자로 변환

console.log(solution(118372)) // 873211