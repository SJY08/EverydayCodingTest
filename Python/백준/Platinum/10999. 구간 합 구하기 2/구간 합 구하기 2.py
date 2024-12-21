import sys
input = sys.stdin.read
data = input().split()

N, M, K = map(int, data[:3])
arr = list(map(int, data[3:3 + N]))
queries = data[3 + N:]

class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree1 = [0] * (n + 1)
        self.tree2 = [0] * (n + 1)

    def _add(self, tree, idx, value):
        while idx <= self.n:
            tree[idx] += value
            idx += idx & -idx

    def _sum(self, tree, idx):
        result = 0
        while idx > 0:
            result += tree[idx]
            idx -= idx & -idx
        return result

    def range_add(self, left, right, value):
        self._add(self.tree1, left, value)
        self._add(self.tree1, right + 1, -value)
        self._add(self.tree2, left, value * (left - 1))
        self._add(self.tree2, right + 1, -value * right)

    def prefix_sum(self, idx):
        return self._sum(self.tree1, idx) * idx - self._sum(self.tree2, idx)

    def range_sum(self, left, right):
        return self.prefix_sum(right) - self.prefix_sum(left - 1)


fenwick = FenwickTree(N)

for i in range(1, N + 1):
    fenwick.range_add(i, i, arr[i - 1])

results = []

query_idx = 0
while query_idx < len(queries):
    a = int(queries[query_idx])
    b = int(queries[query_idx + 1])
    c = int(queries[query_idx + 2])

    if a == 1:
        d = int(queries[query_idx + 3])
        fenwick.range_add(b, c, d)
        query_idx += 4
    elif a == 2:
        results.append(fenwick.range_sum(b, c))
        query_idx += 3

sys.stdout.write("\n".join(map(str, results)) + "\n")