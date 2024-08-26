// 제일 작은 수 제거하기

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  if (arr.length === 1) { // 배열의 길이가 1인 경우 [-1] 반환
      return [-1];
  }

  const minValue = Math.min(...arr); // 배열에서 가장 작은 값 찾기
  
  const minIndex = arr.indexOf(minValue); // 가장 작은 값의 인덱스 찾기
  
  arr.splice(minIndex, 1); // 해당 인덱스의 값을 배열에서 제거
  
  return arr; // 수정된 배열 반환
}