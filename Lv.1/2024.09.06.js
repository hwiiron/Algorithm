// 최대공약수와 최대공배수

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  var answerN = [];
  var answerM = [];
  
  for (let i = 1; i <= n; i++) { // n의 약수를 구해서 answerN에 추가
      if (Number.isInteger(n / i)) { // n을 i로 나눴을 때 나머지가 없으면
          answerN.push(i); // i는 n의 약수
      }
  }
  
  for (let i = 1; i <= m; i++) { // M의 약수를 구해서 answerM에 추가
      if (Number.isInteger(m / i)) { // M을 i로 나눴을 때 나머지가 없으면
          answerM.push(i); // i는 M의 약수
      }
  }
  

  let num1 = 0; // 최대공약수를 저장할 변수
  for (let i = 0; i < answerN.length; i++) { // n의 약수를 순회
      for (let j = 0; j < answerM.length; j++) { // m의 약수를 순회
          if (answerN[i] == answerM[j]) { // 두 약수가 같다면
              num1 = answerN[i]; // 그 수가 최대공약수
          }
      }
  }
  
  let num2 = (n * m) / num1; // 최소공배수는 n * m을 최대공약수로 나눈 값
  
  return [num1, num2]; // 최대공약수와 최소공배수를 배열로 반환
}

console.log(solution(3, 12)) // [3, 12]
console.log(solution(2, 5)) // [1, 10]


// Number.isInteger()는 정수면 true, 정수가 아니면 false를 반환