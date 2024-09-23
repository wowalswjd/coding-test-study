// 이퍼 기출 (중)
// 백준 - 햄버거 분배 (19941)
// https://www.acmicpc.net/problem/19941
// 2024.09.23

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const [n_k, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = n_k.split(" ").map(Number);

function solution(n, k, input) {
  const location = [...input];
  let people = 0; // 먹은 사람의 수
  location.forEach((elem, index) => {
    if (elem === "P") {
      // 사람일 경우
      for (var i = -k; i <= k; i++) {
        // 탐색 범위 안에서 왼쪽부터 검색
        if (index + i >= 0 && index + i < location.length) {
          // index+i가 배열 범위 안에 있을 때
          if (location[index + i] === "H") {
            // 해당 위치가 햄버거이고, 아직 먹지 않았다면
            location[index + i] = "D"; // 먹음 처리
            people++; // 먹은 사람 수 증가
            break; // for문 빠져나가기
          }
        }
      }
    }
  });

  return people;
}

console.log(solution(n, k, input));
