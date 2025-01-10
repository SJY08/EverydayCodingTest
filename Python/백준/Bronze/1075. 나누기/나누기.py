N = int(input())
F = int(input())

num = N // 100 * 100

while num % F != 0 : num += 1

print(str(num)[-2:])