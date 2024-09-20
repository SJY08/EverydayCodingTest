num = input()

arr = list(map(int, input().split()))
maxNum = max(arr)
arrSum = sum(arr)

print(arrSum*100/maxNum/int(num))