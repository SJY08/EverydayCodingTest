nums = list(map(int,input().split()))
min_num = min(nums)

while True:
    count = 0
    for i in nums:
        if min_num%i == 0 : count+=1
    if count > 2 : break
    min_num += 1

print(min_num)