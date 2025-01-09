// 7의 개수

// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때,
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  var answer = 0;

  // array 배열을 반복
  for (let i = 0; i < array.length; i++) {
    let str = array[i].toString(); // 현재 문자열 정수를 문자열로 변환

    // str 문자열을 반복
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "7") {
        // 문자열의 각 문자를 확인
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
