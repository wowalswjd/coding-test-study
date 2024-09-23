// 이퍼 기출 (하)
// 프로그래머스 - 크레인 인형 뽑기
// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
// 2024.09.12

function solution(board, moves) {
  var answer = 0;
  var stack = [];
  moves.forEach((line) => {
    // moves 반복
    for (var i = 0; i < board.length; i++) {
      // 최대 board 길이만큼 반복
      // 인형 탐색
      if (board[i][line - 1] === 0) {
        continue;
      } else {
        // 0으로 교체 후 바구니에 넣기 break
        stack.push(board[i][line - 1]); // 바구니에 넣기
        board[i][line - 1] = 0; // 0으로 교체
        break;
      }
    }
    while (
      stack.length >= 2 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.pop(); // 마지막 두 개 인형 제거
      stack.pop();
      answer += 2; // 터진 인형 개수 2개 추가
    }
  });
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
