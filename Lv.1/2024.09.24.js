// 서울에서 김서방 찾기

// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) { 
    if (seoul[i] == 'Kim') { // seoul 배열의 i번째 요소가 'Kim'이면
      return `김서방은 ${i}에 있다`; // '김서방은 i에 있다' 반환
    }
  }
}

console.log(solution(["Jane", "Kim"])) // "김서방은 1에 있다"