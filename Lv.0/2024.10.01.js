// 특정 문자 제거하기

// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  var answer = '';
  // 방법 1
  for (let i = 0; i < my_string.length; i++) { // my_string의 각 문자를 확인하기 위해 반복문 사용
    if (my_string[i] !== letter) { // 현재 문자가 letter와 같지 않다면,
      answer += my_string[i]; // answer에 추가
    }
  }

  // 방법 2
  // .split(letter) - letter를 기준으로 문자열을 잘라 배열로 만들고 letter는 사라진다.
  // .join('') - 배열을 문자열로 변환
  // return my_string.split(letter).join('');

  // 방법 3
  // spread 문법으로 배열로 변환 후, filter 메소드를 활용하여 letter와 같지 않은 단어들로 새로운 배열을 만들고, 문자열로 합기는 방법
  // return [...my_string].filter(string => string !== letter).join('');
  
  return answer;
}

console.log(solution("abcdef", "f")) // "abcde"
console.log(solution("BCBdbe", "B")) // "Cdbe"