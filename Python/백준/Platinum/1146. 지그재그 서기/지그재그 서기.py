import sys

input = sys.stdin.readline


def solution(N):
    memo = [[0 for _ in range(N+1)] for __ in range(N+1)]
    memo[0][0] = 1
    memo[1][1] = 1
    for n in range(2, N+1):
        for p in range(1, n+1):
            comb = 1
            for num in range(p-1):
                comb *= n-1-num
            for num in range(1, p):
                comb //= num
            if p <= 2 or p >= n-1:
                if p <= 2 and p >= n-1:
                    memo[n][p] = (sum(memo[p-1]) * sum(memo[n-p])) * comb
                else:
                    memo[n][p] = (sum(memo[p-1]) * sum(memo[n-p])) // 2 * comb
            else:
                memo[n][p] = (sum(memo[p-1]) * sum(memo[n-p])) // 4 * comb

    return sum(memo[-1]) % 1000000


N = int(input().strip())
print(solution(N))