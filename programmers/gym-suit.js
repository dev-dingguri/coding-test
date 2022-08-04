// https://school.programmers.co.kr/learn/courses/30/lessons/42862

const solution = (n, lost, reserve) => {
  const suits = Array.from({ length: n }, () => 1);
  lost.forEach((val) => {
    --suits[val - 1];
  });
  reserve.forEach((val) => {
    ++suits[val - 1];
  });

  for (let i = 0; i < suits.length; ++i) {
    if (suits[i] > 1) {
      if (i > 0 && suits[i - 1] === 0) {
        --suits[i];
        ++suits[i - 1];
      } else if (i < suits.length - 1 && suits[i + 1] === 0) {
        --suits[i];
        ++suits[i + 1];
      }
    }
  }
  return suits.filter((suit) => suit > 0).length;
};
