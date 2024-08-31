// 약수의 개수와 덧셈

// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  var answer = 0;
  
  for (let num = left; num <= right; num++) { // left부터 right까지 숫자들을 순회합니다.
    let divisorCount = 0;
    
    for (let i = 1; i <= num; i++) { // 해당 숫자의 약수의 개수를 셉니다.
      if (num % i == 0) {
        divisorCount++;
      }
    }
    
    if (divisorCount % 2 === 0) { // 약수의 개수가 홀수인지 짝수인지에 따라 값을 더하거나 뺍니다.
      answer += num;  // 짝수면 더함
    } else {
      answer -= num;  // 홀수면 뺌
    }
  }

  return answer;  // 최종 결과 반환
}

console.log(solution(13, 17)) // 43
console.log(solution(24, 27)) // 52