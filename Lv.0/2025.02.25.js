// 왼쪽 오른쪽

// 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다.
// str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면
// 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를,
// 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로
// 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// "l"이나 "r"이 없다면 빈 리스트를 return합니다.

function solution(str_list) {
  // 배열을 처음부터 끝까지 반복
  for (let i = 0; i < str_list.length; i++) {
    // 'l'을 만나면 해당 인덱스 이전의 요소들을 잘라서 반환
    if (str_list[i] === "l") {
      return str_list.slice(0, i); // 배열의 0번 인덱스부터 i-1번 인덱스까지 자름
    }

    // 'r'을 만나면 해당 인덱스 이후의 요소들을 잘라서 반환
    else if (str_list[i] === "r") {
      return str_list.slice(i + 1); // i+1번 인덱스부터 끝까지 자름
    }
  }

  // 'l'이나 'r'이 없는 경우, 빈 배열 반환
  return [];
}

console.log(solution(["u", "u", "l", "r"])); // ["u", "u"]
console.log(solution(["l"])); // []
