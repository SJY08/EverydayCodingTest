def max_path_sum(triangle):
    for i in range(len(triangle) - 2, -1, -1):
        for j in range(len(triangle[i])):
            triangle[i][j] += max(triangle[i+1][j], triangle[i+1][j+1])
    return triangle[0][0]

n = int(input())
triangle = [list(map(int, input().split())) for _ in range(n)]

print(max_path_sum(triangle))
