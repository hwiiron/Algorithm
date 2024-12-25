// 주사위 게임 2

// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.

// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c) {
  let abc = a + b + c;
  const abc2 = a ** 2 + b ** 2 + c ** 2;
  const abc3 = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    // 세 숫자가 모두 같은 경우
    return (abc = abc * abc2 * abc3);
  } else if (a === b || b === c || a === c) {
    // 두 숫자만 같은 경우
    return (abc = abc * abc2);
  } else {
    // 세 숫자가 모두 다른 경우
    return abc;
  }
}

console.log(solution(2, 6, 1)); // 9
console.log(solution(5, 3, 3)); // 473
console.log(solution(4, 4, 4)); // 110592
