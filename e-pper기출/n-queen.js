// 이퍼 기출 (중)
// 프로그래머스 - N-Queen 🌟
// https://school.programmers.co.kr/learn/courses/30/lessons/12952?language=javascript
// 2024.09.27

function backtracking(row, n, columns, diag_up, diag_down) {
  // 현재 row에서 퀸을 배치하는 모든 가능한 방법을 재귀적으로 탐색
  // n개의 퀸을 모두 배치한 경우
  if (row === n) {
    return 1;
  }

  let answers = 0;
  for (let col = 0; col < n; col++) {
    // 현재 row에서 가능한 모든 col에 대해 퀸을 놓을 수 있는지 확인
    if (columns[col] || diag_up[row + col] || diag_down[row - col + n - 1]) {
      continue; // 해당 위치에 퀸을 놓을 수 없는 경우 다음 열로 이동
    }

    // 퀸 배치
    columns[col] = true;
    diag_up[row + col] = true;
    diag_down[row - col + n - 1] = true;

    answers += backtracking(row + 1, n, columns, diag_up, diag_down);

    // 다음 탐색을 위해 퀸 회수
    columns[col] = false;
    diag_up[row + col] = false;
    diag_down[row - col + n - 1] = false;
  }

  return answers;
}

function solution(n) {
  const columns = new Array(n).fill(false); // 열 체크
  const diag_up = new Array(2 * n - 1).fill(false); // 상향 대각선 체크
  const diag_down = new Array(2 * n - 1).fill(false); // 하향 대각선 체크

  return backtracking(0, n, columns, diag_up, diag_down);
}
