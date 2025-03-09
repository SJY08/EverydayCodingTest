def factorial(n) :
    dp = [0] * (n+1)
    dp[0] = 1
    for i in range(1, n+1) : dp[i] = dp[i-1] * i
    return dp[n]

n = str(factorial(int(input())))
num = []
for v in n : num.append(v)
num = list(reversed(num))

count = 0
for i in num :
    if i == "0" : count += 1
    else : break

print(count)