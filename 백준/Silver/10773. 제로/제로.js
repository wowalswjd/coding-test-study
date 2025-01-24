const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function solution(input) {
  const stack = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] == "0") {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }
  return stack;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let answer = 0;

  const result = solution(input);
  for (const num of result) {
    answer += Number(num);
  }

  console.log(answer);
  process.exit(0);
});
