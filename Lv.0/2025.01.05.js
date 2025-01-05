// 1로 만들기

// 정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면,
// 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.
// 정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서
// 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = 0;

  for (let num of num_list) {
    // 리스트의 숫자 반복
    while (num > 1) {
      if (num % 2 === 0) {
        // 짝수라면 나누기
        num = num / 2;
      } else {
        // 홀수라면 1을 빼고 나누기
        num = (num - 1) / 2;
      }
      answer++;
    }
  }

  return answer;
}

console.log(solution([12, 4, 15, 1, 14])); // 11
