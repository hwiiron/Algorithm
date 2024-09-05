// 직사각형 별찍기

// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let str = '';
    let star = str.padEnd(a, '*'); // pedEnd 메서드로 'a' 길이만큼 '*'로 채운 문자열 생성
    
    for (let i = 1; i <= b; i++) { // 세로 길이 'b'만큼 반복해서 문자열 출력
        console.log(star);
    }
});

// a = 5, b = 3일 때

// *****
// *****
// *****