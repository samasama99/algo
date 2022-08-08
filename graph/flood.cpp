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

class Solution {
  static constexpr array<array<int, 2>, 4> directions = {{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}};
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
      map<array<int, 2>, bool> visited;
      queue<array<int,2>> q;
      q.push({sr, sc});
      auto startColor = image[sr][sc];

      while (q.size()) {
        auto [r, c] = q.front();
        q.pop();
        if (r < 0 || r >= image.size()) continue;
        if (c < 0 || c >= image[0].size()) continue;
        if (image[r][c] != startColor) continue;
        if (visited[{r, c}] == true) {
          continue;
        } else {
          visited[{r, c}] = true;
          image[r][c] = color;  
        }
        for (auto d : directions) q.push({r + d[0], c + d[1]});
      }
      return image;
    }
};

int main() {
  Solution s;
  vector<vector<int>> image = {{1,1,1},{1,1,0},{1,0,1}};
  s.floodFill(image, 1, 1, 2);
  for (auto row : image) {
    for (auto pixel : row) {
      std::cout << pixel << ' ';
    }
    std::cout << '\n';
  }
}


// const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//
// const dfsFloding = (image, r, c, color, visited, startColor) => {
//     if (r < 0 || r >= image.length) return;
//     if (c < 0 || c >= image[0].length) return;
//     if (image[r][c] != startColor) return;
//    
//     if (visited.has(String(r + ' ' + c))) return;
//     visited.add(String(r + ' ' + c));
//     image[r][c] = color;
//     for (let d of directions) {
//         dfsFloding(image, r + d[0], c + d[1], color, visited, startColor);
//     }
// }
//
// const floodFill = function(image, sr, sc, color) {
//     dfsFloding (image, sr, sc, color, new Set(), image[sr][sc]);
//     return image;
// };
