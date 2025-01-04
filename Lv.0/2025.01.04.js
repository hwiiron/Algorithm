// 배열 만들기 5

// 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(intStrs, k, s, l) {
  var answer = [];

  for (let j = 0; j < intStrs.length; j++) {
    // 부분 문자열 추출
    let substring = intStrs[j].slice(s, s + l);
    let number = Number(substring); // 숫자형 변환

    // 기준 값보다 큰 경우만 추가
    if (number > k) {
      answer.push(number);
    }
  }

  return answer;
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
); // [56789, 99999]
