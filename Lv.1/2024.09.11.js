// 이상한 문자 만들기

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
  var answer = '';
  
  let arr = s.split(' ');
  
  for (let i = 0; i < arr.length; i++) { // 각 단어 반복
    for (let j = 0; j < arr[i].length; j++) { // 각 단어의 문자 반복
      if (j % 2 == 0) { // 짝수일 경우 대문자로 변환
          answer += arr[i][j].toUpperCase();
      } else { // 홀수일 경우 소문자로 변환
          answer += arr[i][j].toLowerCase();
      }
    }
    
    if (i < arr.length - 1) { // 마지막 단어 제외하고 단어 뒤에 공백 추가
        answer += ' ';
    }
  }
  
  return answer;
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"