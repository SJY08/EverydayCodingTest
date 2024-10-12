num = int(input())
arr = []

for i in range(num):
    n = int(input())
    arr.append(n)
    
arr.sort()

for v in arr: print(v)