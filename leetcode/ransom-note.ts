// https://leetcode.com/problems/ransom-note/

const canConstruct = (ransomNote: string, magazine: string) => {
  const map = new Map<string, number>();
  for (const ch of magazine) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }
  for (const ch of ransomNote) {
    map.set(ch, (map.get(ch) ?? 0) - 1);
    if ((map.get(ch) ?? 0) < 0) {
      return false;
    }
  }
  return true;
};
