// https://leetcode.com/problems/delete-operation-for-two-strings

{
  // 1
  /**
   * @param {string} word1
   * @param {string} word2
   * @return {number}
   */
  let minDistance = (word1, word2) => {
    const memo = Array.from({ length: word1.length }, () =>
      Array.from({ length: word2.length }, () => 0)
    );
    return (
      word1.length +
      word2.length -
      2 * lcs(word1, word2, word1.length - 1, word2.length - 1, memo)
    );
  };

  let lcs = (word1, word2, i1, i2, memo) => {
    if (i1 < 0 || i2 < 0) {
      return 0;
    }
    if (memo[i1][i2] === 0) {
      if (word1[i1] === word2[i2]) {
        memo[i1][i2] = 1 + lcs(word1, word2, i1 - 1, i2 - 1, memo);
      } else {
        memo[i1][i2] = Math.max(
          lcs(word1, word2, i1 - 1, i2, memo),
          lcs(word1, word2, i1, i2 - 1, memo)
        );
      }
    }
    return memo[i1][i2];
  };
}

{
  // 2
  /**
   * @param {string} word1
   * @param {string} word2
   * @return {number}
   */
  let minDistance = (word1, word2) => {
    const dp = Array.from({ length: word1.length + 1 }, () =>
      Array.from({ length: word2.length + 1 }, () => 0)
    );
    for (let i = 1; i <= word1.length; ++i) {
      for (let j = 1; j <= word2.length; ++j) {
        if (word1[i - 1] == word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return word1.length + word2.length - 2 * dp[word1.length][word2.length];
  };
}
