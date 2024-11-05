// 배열 비교하기

// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(arr1, arr2) {
  var answer = 0;

  let arrNum1 = 0;
  let arrNum2 = 0;

  if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length === arr2.length) {
    // 배열의 길이가 같은 경우 각 요소의 합 비교
    for (let i = 0; i < arr1.length; i++) {
      arrNum1 += arr1[i];
      arrNum2 += arr2[i];
    }

    if (arrNum1 < arrNum2) {
      return -1;
    } else if (arrNum1 > arrNum2) {
      return 1;
    } else {
      return 0;
    }
  }
  return answer;
}

console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3])); // 0
