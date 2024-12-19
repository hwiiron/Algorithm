// 369게임

// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
  var answer = 0;
  const str_oreder = String(order);

  for (let i = 0; i < str_oreder.length; i++) {
    // 문자열의 각 자릿수를 반복
    if (str_oreder[i] === "3") {
      // 현재 문자가 "3"인지 확인
      answer++; // "3"이면 카운트 증가
    } else if (str_oreder[i] === "6") {
      // 현재 문자가 "6"인지 확인
      answer++; // "6"이면 카운트 증가
    } else if (str_oreder[i] === "9") {
      // 현재 문자가 "9"인지 확인
      answer++; // "9"이면 카운트 증가
    } else {
      continue; // 3, 6, 9가 아니면 다음 반복으로 넘어감
    }
  }
  return answer;
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
