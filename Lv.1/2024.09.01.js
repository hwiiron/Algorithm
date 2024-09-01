// 문자열 내림차순으로 배치하기

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  return s.split('').sort().reverse().join('');

  // .split('') - 문자열 s를 배열로 반환
  // .sort() - 배열의 요소들을 오름차순으로 정렬
  // .reverse() - 정렬된 배열을 내림차순으로 뒤집기
  // .join('') - 배열을 다시 문자열로 합침
}

console.log(solution("Zbdefcg")) // "gfedcbZ"