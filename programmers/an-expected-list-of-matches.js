// https://programmers.co.kr/learn/courses/30/lessons/12985

// best
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    ++answer;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    ++answer;
    a = parseInt((a + 1) / 2); // JS에서 (a + 1) / 2는 실수임
    b = parseInt((b + 1) / 2);
  }
  return answer;
}
