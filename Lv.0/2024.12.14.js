// 이어 붙인 수

// 정수가 담긴 리스트 num_list가 주어집니다.
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let odd = "";
  let even = "";

  for (let i = 0; i < num_list.length; i++) {
    // num_list 문자열의 문자를 반복
    if (num_list[i] % 2 !== 0) {
      // 문자가 홀수라면
      odd += num_list[i]; // odd에 문자 추가
    } else {
      // 짝수라면
      even += num_list[i]; // even에 문자 추가
    }
  }

  return Number(odd) + Number(even); // 문자를 숫자로 변환하여 odd, even의 합을 리턴
}

console.log(solution()); //
console.log(solution()); //
