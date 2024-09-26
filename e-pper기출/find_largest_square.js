// 이퍼 기출 (중)
// 프로그래머스 - 가장 큰 정사각형 찾기 🌟
// https://school.programmers.co.kr/learn/courses/30/lessons/12905?language=javascript
// 2024.09.26

function solution(board) {
  let maxLength = 0; // 가장 큰 정사각형의 변의 길이
  const dp = [...board]; // dp 배열 생성

  // 첫 행과 첫 열을 따로 처리 - 앞, 옆이 없는 경우 있으므로
  for (let i = 0; i < board.length; i++) {
    dp[i][0] = board[i][0];
    if (dp[i][0] === 1) maxLength = 1; // 만약 board[i][0]이 1인 경우 갱신
  }
  for (let j = 0; j < board[0].length; j++) {
    dp[0][j] = board[0][j];
    if (dp[0][j] === 1) maxLength = 1; // 만약 board[0][j]가 1인 경우 갱신
  }

  for (var i = 1; i < board.length; i++) {
    // 나머지 반복 시작
    for (var j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        // 대각선, 앞, 옆 중 최솟값 + 1
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        maxLength = Math.max(maxLength, dp[i][j]); // 현재 값이 최댓값보다 크면 갱신
      }
    }
  }

  return maxLength * maxLength;
}

const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
console.log(solution(board));
