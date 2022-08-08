#include <queue>
#include <iostream>

int main() {
  std::queue<int> q;
  q.push(5);
  q.push(6);
  q.push(7);
  q.push(8);
  q.push(9);
  q.push(10);
  std::cout << q.front() << '\n';
  q.pop();
  std::cout << q.front() << '\n';
  std::cout << q.front() << '\n';
}
