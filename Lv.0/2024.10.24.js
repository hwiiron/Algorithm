// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(box, n) {
  var answer = 1; // answer가 처음에 0이면 결과 값이 무조건 0이 나오므로 1로 설정
  for (let i = 0; i < box.length; i++) {
    answer *= Math.floor(box[i] / n); // 가로, 세로, 높이 값을 n으로 나누고, 소수점을 제외한 값을 answer에 차례대로 곱하기
  }
  return answer;
}

console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); // 12
