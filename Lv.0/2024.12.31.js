// 문자열 뒤집기

// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  // 문자열을 배열로 변환
  let arr = my_string.split("");

  // 인덱스 s부터 e까지를 뒤집기
  let reversedPart = arr.slice(s, e + 1).reverse();

  // 앞, 뒤와 결합하여 새로운 문자열 생성
  let result = arr
    .slice(0, s)
    .concat(reversedPart)
    .concat(arr.slice(e + 1));

  // 배열을 문자열로 변환하여 반환
  return result.join("");
}

console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
console.log(solution("Stanley1yelnatS", 4, 10)); // "Stanley1yelnatS"
