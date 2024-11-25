// 할 일 목록

// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때,
// todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    // todo_list 배열을 순회하면서
    if (finished[i]) {
      // finished 배열의 원소가 true이면
      continue; // 배열을 다시 순회하고
    } else {
      // finished 배열의 원소가 false이면
      answer.push(todo_list[i]); //todo_list 원소를 answer 빈 배열에 추가
    }
  }
  return answer;
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
