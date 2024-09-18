// 문자열 내 p와 y의 개수

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s){
  var answer = true;
  
  let lowerCase = s.toLowerCase(); // 문자열을 소문자로 변환
  
  let p = 0;
  let y = 0;

  for (let i = 0; i < lowerCase.length; i++) { // 문자열을 각 문자를 순회하면서 'p', 'y'의 갯수를 카운트
      if (lowerCase[i] == 'p') { // 'p'가 나오면 p 1증가
          p++;
      } else if (lowerCase[i] == 'y' ) { // 'y'가 나오면 y 1증가
          y++;
      }
  }
  
  if (p == y) { // p와 y의 갯수가 같다면 answer는 true
      answer = true;
  } else { // 갯수가 다르다면 false
      answer = false;
  }

  return answer;
}

console.log(solution("pPoooyY")) // true
console.log(solution("Pyy")) // false