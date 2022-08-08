// const toGraph = (map) => {
//     const lineLen = map[0].length;
//     const nbLines = map.length
//     const graph = {}
//
//     for (let j = 0 ; j < nbLines ; ++j) {
//         for (let i = 0 ; i < lineLen ; ++i) {
//             if (!([i, j] in graph)) graph[[i, j]] = []
//             if (i - 1 >= 0 && map[j][i - 1] === '.') graph[[i, j]].push([i - 1, j])
//             if (i + 1 < lineLen && map[j][i + 1] === '.') graph[[i, j]].push([i + 1, j])
//             if (j - 1 >= 0 && map[j - 1][i] === '.') graph[[i, j]].push([i, j - 1])
//             if (j + 1 < nbLines && map[j + 1][i] === '.') graph[[i, j]].push([i, j + 1])
//         }
//     }
//     return graph
// }
//
// const hasPath = (graph, src, dst) => {
//   const stack = [src];
//   const visited = new Set();
//
//   while (stack.length > 0) {
//       const current = stack.pop();
//       if (current[0] == dst[0] && current[1] == dst[1]) return true;
//       visited.add(current);
//       for (let neighbor of graph[current]) {
//           if (visited.has(neighbor) == false)
//             stack.push(neighbor);
//       }
//   }
//   return false;
// };
//
// function pathFinder(maze){
//   const map = maze.split('\n').map(el => [...el]);
//   const graph = toGraph(map);
//   const lineLen = map[0].length;
//   const nbLines = map.length;
//   return hasPath(graph, [0, 0], [nbLines - 1, lineLen - 1], new Set());
// }

#include <iostream>
#include <stack>
#include <string>
#include <vector>
#include <array>
#include <map>
#include <set>

using namespace std;

typedef long long ll;

vector<string> split(const string s, const string dils) {
  vector<string> splited;
  char *tmp = new char[s.length()];
  char *tok;
  memcpy(tmp, s.c_str(), s.length() + 1);
  tok = strtok(tmp, dils.c_str());
  while (tok) {
    splited.push_back(tok);
    tok = strtok(NULL, dils.c_str());
  }
  return splited; 
}


typedef map<pair<ll, ll>, vector<pair<ll, ll> > > Graph;

Graph toGraph(vector<string> map) {
    const auto lineLen = map[0].size();
    const auto nbLines = map.size();
    Graph graph = {};

    for (ll j = 0 ; j < nbLines ; ++j) {
        for (ll i = 0 ; i < lineLen ; ++i) {
            if (map[j][i] == 'W') {
                graph[make_pair(i, j)].push_back(make_pair(-1, -1));
            } else {
              if (i - 1 >= 0 && map[j][i - 1] == '.') graph[make_pair(i, j)].push_back(make_pair(i - 1, j));
              else graph[make_pair(i, j)].push_back(make_pair(-1, -1));
              if (i + 1 < lineLen && map[j][i + 1] == '.') graph[make_pair(i, j)].push_back(make_pair(i + 1, j));
              else graph[make_pair(i, j)].push_back(make_pair(-1, -1));
              if (j - 1 >= 0 && map[j - 1][i] == '.') graph[make_pair(i, j)].push_back(make_pair(i, j - 1));
              else graph[make_pair(i, j)].push_back(make_pair(-1, -1));
              if (j + 1 < nbLines && map[j + 1][i] == '.') graph[make_pair(i, j)].push_back(make_pair(i, j + 1));
              else graph[make_pair(i, j)].push_back(make_pair(-1, -1));
            }
        }
    }
    return graph;
}

const bool hasPath(Graph graph, pair<ll, ll> src, pair<ll, ll> dst) {
  stack<pair<ll, ll> > s;
  s.push(src);

  set<pair<ll, ll> > visited {};

  while (s.size() > 0) {
      pair<ll, ll> current = s.top();
      s.pop();
      if (current.first == dst.first && current.second == dst.second) return true;
      visited.insert(current);
      for (auto neighbor : graph[current]) {
          if (neighbor.first == -1 || neighbor.second == -1) continue;
          if (visited.find(neighbor) == visited.end())
            s.push(neighbor);
      }
  }
  return false;
};

bool path_finder(string maze) {
  const auto map = split(maze, "\n");
  const auto graph = toGraph(map);
  const auto lineLen = map[0].size();
  const auto nbLines = map.size();
  return hasPath(graph, make_pair(0, 0), make_pair(lineLen - 1, nbLines - 1));
}

// int main() {
//     const string input = ".W...W...W...\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n.W.W.W.W.W.W.\n...W...W...W.\n";
//     cout << path_finder(input) << '\n';
// }
