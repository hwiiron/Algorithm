// 나머지가 1이 되는 수 찾기

// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는
// 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

function solution(n) {
  var answer = 0;
  
  for (let i = n; i > 0; i--) { // n부터 1까지 역순으로 순회
      if (n % i == 1) { // n을 i로 나눈 나머지가 1이면 해당 수를 answer에 저장
          answer = i; // 역순으로 순회하기 때문에 나머지가 1이 되도록 하는 i가 가장 작은 자연수 값이 됨
      }
  }
  
  return answer;
}

console.log(solution(10)) // 3
console.log(solution(12)) // 11