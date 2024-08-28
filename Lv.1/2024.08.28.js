// 가운데 글자 가져오기

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  const mid = Math.floor(s.length / 2); // 문자열의 중간 인덱스를 계산 (소수점 이하 버림)
  
  if (s.length % 2 !== 0) { // 문자열 길이가 홀수인 경우
      return s[mid]; // 중간에 위치한 문자 반환
  } else { // 문자열이 길이가 짝수인 경우
      return s.substring(mid - 1, mid + 1); // 중간에 위치한 두 문자를 반환
  }
}

console.log(solution("abcde")) // c
console.log(solution("qwer")) // we