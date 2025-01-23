// 다음에 올 숫자

// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
  const length = common.length;

  // 두 번째 항과 첫 번째 항의 차이 === 세 번째 항과 두 번째 항의 차이
  if (common[1] - common[0] === common[2] - common[1]) {
    // 마지막 항에 두 번째 항과 첫 번째 항의 차이를 더한 값을 반환
    return common[length - 1] + (common[1] - common[0]);
  }
  // 두 번째 항과 첫 번째 항의 비율 === 세 번째 항과 두 번째 항의 비율
  else if (common[1] / common[0] === common[2] / common[1]) {
    // 마지막 항에 두 번째 항과 첫 번째 항의 비율을 곱한 값을 반환
    return common[length - 1] * (common[1] / common[0]);
  }
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
