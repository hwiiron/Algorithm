// 행렬의 덧셈

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
  var answer = [];
  
  for (let i = 0; i < arr1.length; i++) {
      answer.push([]); // 각 행을 담을 빈 배열을 추가

      for (let j = 0; j < arr1[i].length; j++) {
          answer[i][j] = arr1[i][j] + arr2[i][j]; // 같은 위치에 있는 arr1, arr2의 값을 더해 answer 배열에 저장
      }
  }
  
  return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]])); // [[4,6],[7,9]]
console.log(solution([[1],[2]], [[3],[4]])); // [[4],[6]]