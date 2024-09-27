// 이퍼 기출 (하)
// 백준 - ATM (11399)
// https://www.acmicpc.net/problem/11399
// 2024.09.11

const fs = require('fs');
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}\\input.txt`;
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const timeArr = input.trim().split(" ").map((e)=>parseInt(e)).sort((a,b)=>a-b);

let answer = 0;

timeArr.forEach((elem, index)=>{
    answer += elem * (timeArr.length - index); 
    // 맨 처음에 있는 값을 n번만큼 곱해서 더하고, 
    // 그 다음 값은 점점 1씩 줄여가며 곱해서 더하는 식
});

console.log(answer);