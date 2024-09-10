// 크기가 작은 부분 문자열

// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서,
// 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다.
// 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

function solution(t, p) {
  var answer = 0;
  
  let arr = [];
  
  for (let i = 0; i <= t.length - p.length; i++) { // p의 길이만큼씩 t에서 부분 문자열 추출
      let subStr = t.slice(i, i + p.length); // t에서 현재 인덱스 i부터 p.length만큼의 부분 문자열 추출
      arr.push(subStr); // 추출한 값 arr 배열에 추가
  }
  
  for (let i = 0; i < arr.length; i++) { // arr 배열에 있는 모든 문자열 순회하며 p보다 작거나 같은지 비교
      if (arr[i] <= p) { // 문자열이 p보다 작거나 같으면
          answer++; // 카운트 증가
      }
  }
  
  return answer;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3