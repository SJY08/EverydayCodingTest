N, M = map(int , input().split())
lines = []

for _ in range(M):
    lines.append(list(map(int, input().split())))

def get_index_zero(li):
    return li[0]
def get_index_one(li):
    return li[1]

package = min(map(get_index_zero, lines))
one = min(map(get_index_one, lines))

answer = min((N // 6 * package) + (N % 6 * one), (N//6+1) * package, N * one)
print(answer)