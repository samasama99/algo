#include <vector>
#include <iostream>
#include <string>
#include <array>
#include <queue>
#include <set>
#include <unordered_set>
#include <unordered_map>
#include <map>
using namespace std;

// class Solution {
//     static constexpr array<array<int, 2>, 4> directions = {{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}};
// public:
//     int numIslands(vector<vector<char>>& grid) {
//       unordered_map<array<int, 2>, bool> visited;
//       queue<array<int,2>> q;
//       int count = 0;

//       for (int sr = 0;sr < grid.size();++sr) {
//         for (int sc = 0;sc < grid[0].size(); ++sc) {
//           if (grid[sr][sc] == '0') continue;
//           cout << sr << ' ' << sc << '\n';
//           if (visited[{sr, sc}] == false) ++count;
//           else continue;
//           q.push({sr, sc});
//           while (q.size()) {
//             auto [r, c] = q.front();
//             q.pop();
//             if (r < 0 || r >= grid.size()) continue;
//             if (c < 0 || c >= grid[0].size()) continue;
//             if (grid[r][c] == '0') continue;
//             if (visited[{r, c}]) {
//               continue;
//             } else {
//               visited[{r, c}] = true;
//             }
//             for (auto d : directions) q.push({r + d[0], c + d[1]});
//           }
//         }
//       }

//       return count;
//     }
// };


static constexpr array<array<int, 2>, 4> directions = {{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}};
bool explore(vector<vector<char>>& grid, int r, int c, set<array<int, 2>> &visited)  {
    const auto rowInbounds = r >= 0 && r < grid.size();
    const auto colInbounds = c >= 0 && c < grid[0].size();
    if (!rowInbounds || !colInbounds) return false;

    if (grid[r][c] == '0') return false;
    
    const array<int, 2> pos = {r, c};
    if (visited.find(pos) != visited.end()) return false;
    visited.insert(pos);
    

    for (auto d : directions) explore(grid, r + d[0], c + d[1], visited);
    return true;
};

int numIslands(vector<vector<char>>& grid) {
    set<array<int, 2>>visited;
    int count = 0;
    for (int r = 0; r < grid.size(); ++r) {
         for (int c = 0; c < grid[0].size(); ++c) {
            if (explore (grid, r, c, visited) == true)
                ++count;
         }
    }
    return count;
};



int main() {
  vector<vector<char>> grid = {{'1','1','0','0','0'}, 
                                {'1','1','0','0','0'}, 
                                {'0','0','1','0','0'}, 
                                {'0','0','0','1','1'}};
  Solution s;
  auto count = s.numIslands(grid);
  cout << "count " << count << '\n';
  for (auto r : grid) {
    for (auto c : r) {
      cout << c << ' ';
    }
    cout << '\n';
  }
}
