// 첫 번째로 나오는 음수

// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요.
// 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  const answer = -1;
  for (let i = 0; i < num_list.length; i++) {
    // num_list 배열을 순회하면서
    if (num_list[i] < 0) {
      // num_list 배열의 원소가 음수이면
      return i; // 해당하는 원소의 index를 리턴
    }
  }
  return answer; // answer는 기본 값이 -1이므로, num_list 배열의 원소에 음수가 없다면 -1을 리턴
}

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
