// 이퍼 기출 (중)
// 프로그래머스 - 가장 많이 받은 선물
// https://school.programmers.co.kr/learn/courses/30/lessons/258712
// 2024.09.21

function solution(friends, gifts) {
  var gift_table = Array.from({ length: friends.length }, () =>
    Array(friends.length).fill(0)
  ); // 누가 누구에게 선물을 주었는지 2차원 배열
  var gift_score = []; // 선물 지수 배열
  var total_gift = Array(friends.length).fill(0); // 다음 달에 받을 선물 개수 배열

  gifts.forEach((name, index) => {
    // gift_table 구성
    const [give, get] = name.split(" ");
    gift_table[friends.indexOf(give)][friends.indexOf(get)] += 1;
  });

  // 선물 지수 계산
  friends.forEach((name, index) => {
    var give_gift = 0; // 준 선물
    var get_gift = 0; // 받은 선물
    for (var i = 0; i < friends.length; i++) {
      give_gift += gift_table[index][i]; // 준 선물 계산
      get_gift += gift_table[i][index]; // 받은 선물 계산
    }
    gift_score.push(give_gift - get_gift);
  });

  // 다음 달에 받을 선물 수 계산
  for (var i = 0; i < gift_table.length; i++) {
    // 준 사람 수만큼 반복
    for (var j = i + 1; j < gift_table.length; j++) {
      if (gift_table[i][j] > gift_table[j][i]) {
        // 더 많이 줬음
        total_gift[i]++;
      } else if (gift_table[i][j] < gift_table[j][i]) {
        total_gift[j]++;
      } else {
        if (gift_score[i] > gift_score[j]) {
          total_gift[i]++;
        } else if (gift_score[i] < gift_score[j]) {
          total_gift[j]++;
        }
      }
    }
  }
  // 선물 주고 받은 기록이 있는지 확인
  // 있다면 -> 누가 더 많이 받았는지 비교 후 해당 사람이 더 많이 줬다 -> 선물 +1
  // 없다면 -> 선물 지수 비교

  console.log(gift_table);
  console.log(gift_score);
  console.log(total_gift);
  return Math.max(...total_gift);
}

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];
console.log(solution(friends, gifts));
