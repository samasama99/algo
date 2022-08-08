#include <string>
#include <vector>
#include <functional>
#include <algorithm>
#include <numeric>
#include <iostream>
using namespace std;
int digital_root(int n)
{
    if (to_string(n).size() == 1) return n;
   
    string s = to_string(n);
    vector<int> ints;
    transform(s.begin(), s.end(), back_inserter(ints), [](char c){
        return c - '0';
    });
    int sum = accumulate(ints.begin(), ints.end(), 0);
    return digital_root(sum);
}

int main() {
    int x = digital_root(55);
    cout << x << '\n';
}
