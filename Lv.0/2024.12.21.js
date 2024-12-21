// 숫자 찾기

// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으
// num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
  const str_num = String(num); // 숫자형 num 문자형으로 변환
  const str_k = String(k); // 숫자형 k 문자형으로 변환

  for (let i = 0; i < str_num.length; i++) {
    // str_num의 문자를 반복하며
    if (str_num[i] === str_k) {
      // 현재 str_num의 문자와 str_k가 같다면
      return i + 1; // i + 1의 값을 반환
    }
  }
  return -1; // 문자열 모두 같지 않다면 -1을 반환
}

console.log(solution(29183, 1)); // 3
console.log(solution(232443, 4)); // 4
console.log(solution(123456, 7)); // -1
