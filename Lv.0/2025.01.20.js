// OX퀴즈

// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(quiz) {
  var answer = [];

  // quiz 배열의 문자열 반복
  quiz.forEach((str) => {
    // 공백 기준으로 값 추출
    const [left, operator, right, n, result] = str.split(" ");
    // eval을 활용하여 값 추출
    const result2 = eval(`${left} ${operator} ${right}`);

    // 계산 결과와 quiz 문자열의 주어진 결과값과 비교하여 "O", "X"를 answer에 추가
    if (result2 == result) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  });

  return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); // ["O", "O", "X", "O"]
