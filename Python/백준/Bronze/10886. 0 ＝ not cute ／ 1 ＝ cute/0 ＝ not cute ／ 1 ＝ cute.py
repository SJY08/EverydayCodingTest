N = int(input())
result = 0

for _ in range(N):
    vote = int(input())
    if vote == 1 : result += 1
    else : result -= 1

if result > 0 : print("Junhee is cute!")
else : print("Junhee is not cute!")