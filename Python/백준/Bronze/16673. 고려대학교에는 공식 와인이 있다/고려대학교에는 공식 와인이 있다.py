C, K, P = map(int, input().split())
answer = 0

for N in range(C+1):
    answer += (K*N + P*N**2)
    
print(answer)