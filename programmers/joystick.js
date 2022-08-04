// https://school.programmers.co.kr/learn/courses/30/lessons/42860

const solution = (nameString) => {
  const name = Array.from(nameString);

  const answer = name.reduce((sum, ch) => {
    return (
      sum +
      Math.min(
        Math.abs(ch.charCodeAt(0) - 'A'.charCodeAt(0)),
        Math.abs('Z'.charCodeAt(0) - ch.charCodeAt(0) + 1)
      )
    );
  }, 0);

  let move = name.length - 1;
  for (let left = 0; left < name.length; ++left) {
    let right = left + 1;
    while (right < name.length && name[right] === 'A') ++right;
    right = name.length - right;
    move = Math.min(move, Math.min(left, right) * 2 + Math.max(left, right));
  }
  return answer + move;
};
