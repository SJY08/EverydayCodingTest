num = input().zfill(2)
first_num = num
answer = 0

while True :
    num1 = str(int(num[0]) + int(num[1]))[-1]
    num = num[1] + num1
    answer+=1
    if num == first_num : break

print(answer)