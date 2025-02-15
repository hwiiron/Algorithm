// 리스트 자르기

// 정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다.
// slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

function solution(n, slicer, num_list) {
  var answer = [];

  if (n === 1) {
    // num_list의 0번 인덱스부터 b번 인덱스까지
    return num_list.slice(0, slicer[1] + 1);
  } else if (n === 2) {
    // num_list의 a번 인덱스부터 마지막 인덱스까지
    return num_list.slice(slicer[0], num_list.length + 1);
  } else if (n === 3) {
    // num_list의 a번 인덱스부터 b번 인덱스까지
    return num_list.slice(slicer[0], slicer[1] + 1);
  } else {
    // num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
    let arr = num_list.slice(slicer[0], slicer[1] + 1);

    for (let i = 0; i < arr.length; i += slicer[2]) {
      answer.push(arr[i]);
    }

    return answer;
  }
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 4, 5, 6]
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6]
