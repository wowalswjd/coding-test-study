// 이퍼 기출 (하)
// 백준 - 팰린드롬 만들기 (1213)
// https://www.acmicpc.net/problem/1213
// 2024.09.11

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("");

function solution(input) {
  // 분류
  const dic = {};
  input.forEach((alpha) => {
    dic[alpha] = input.filter((e) => e === alpha).length; // 배열에서 해당 값 검색해서 개수를 구함
  });

  let odd = 0; // 홀수 개수
  let odd_alphabet = ""; // 홀수인 알파벳
  let palin = []; // 팰린드롬 기본 배열

  for (var key in dic) {
    if (dic[key] % 2 === 1) {
      // 홀수면
      odd++; // 홀수 개수++
      odd_alphabet = key; // 홀수인 알파벳 저장
    }
  }

  if (odd === 1) {
    // 홀수가 하나만 있으면
    dic[odd_alphabet]--; // 개수 하나 빼기
    for (var key in dic) {
      for (var i = 0; i < dic[key] / 2; i++) {
        // 팰린드롬은 알파벳 절반은 사전순, 나머지는 역사전순이므로
        palin.push(key); // 개수의 절반만큼만 기본 배열에 넣어줌
      }
    }
    palin.sort(); // 사전순 정렬
    return palin.join("") + odd_alphabet + palin.reverse().join("");
  } else if (odd === 0) {
    // 짝수만 있으면
    for (var key in dic) {
      for (var i = 0; i < dic[key] / 2; i++) {
        // 팰린드롬은 알파벳 절반은 사전순, 나머지는 역사전순이므로
        palin.push(key); // 개수의 절반만큼만 기본 배열에 넣어줌
      }
    }
    palin.sort(); // 사전순 정렬
    return palin.join("") + palin.reverse().join("");
  } else {
    return "I'm Sorry Hansoo";
  }
}

console.log(solution(input));
