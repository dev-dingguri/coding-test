// https://programmers.co.kr/learn/courses/30/lessons/43165

#include <string>
#include <vector>

using namespace std;

int dfs(const vector<int> &numbers, int target, int idx, int calcResult) {
    if (numbers.size() == idx) {
        return target == calcResult ? 1 : 0;
    }
    return dfs(numbers, target, idx + 1, calcResult + numbers[idx]) +
           dfs(numbers, target, idx + 1, calcResult - numbers[idx]);
}

int solution(vector<int> numbers, int target) {
    return dfs(numbers, target, 0, 0);
}