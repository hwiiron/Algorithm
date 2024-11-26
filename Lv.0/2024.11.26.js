// 홀수 vs 짝수

// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때,
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요.
// 두 값이 같을 경우 그 값을 return합니다.

function solution(num_list) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < num_list.length; i++) {
    // num_list 배열을 순회하면서
    if (i % 2) {
      // num_list 배열의 홀수 인덱스이면
      odd += num_list[i]; // odd 변수에 더하고
    } else {
      // num_list 배열의 짝수 인덱스이면
      even += num_list[i]; // even 변수에 더하여
    }
  }

  return odd > even ? odd : even; // odd와 even을 비교하여 더 큰 값을 리턴한다.
}

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
