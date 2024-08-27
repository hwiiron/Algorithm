// 핸드폰 번호 가리기

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를
// 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
  // 뒤에서 4자리를 제외한 모든 부분 추출
  let frontNum = phone_number.slice(0, -4);

  // 앞 부분을 '*'로 변환
  let star = frontNum.replace(/./g, '*');

  // 마지막 4자리 추출
  let backNum = phone_number.slice(-4);

  // 변환한 부분과 마지막 4자리를 합쳐서 반환
  return star + backNum;
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"