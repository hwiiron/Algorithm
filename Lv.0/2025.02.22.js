// 문자열 겹쳐쓰기

// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) + // my_string 문자열 앞에서 2개의 문자와
    overwrite_string + // overwrite_string 전체 문자열과
    my_string.slice(s + overwrite_string.length) // my_string 문자열의 s번째 문자부터 overwrite_string 문자열의 길이만큼 잘라서 문자열 생성
  );
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // "HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); // "ProgrammerS123"
