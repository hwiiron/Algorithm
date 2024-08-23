// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
  var plus = 0; // 양수 합계를 저장할 변수
  var minus = 0; // 음수 합계를 저장할 변수
  
  for (let i = 0; i < absolutes.length; i++) {
      if (signs[i] === false) { // signs 배열이 flase면
          minus += absolutes[i] * -1 // 음수로 변환 후 minus에 추가
      } else {
          plus += absolutes[i] // signs 배열이 true면 plus에 추가
      }
  }
  
  return plus + minus; // 양수와 음수를 합산하여 반환
}

console.log(solution([4,7,12], [true,false,true])); // 4 + (-7) + 12 = 9