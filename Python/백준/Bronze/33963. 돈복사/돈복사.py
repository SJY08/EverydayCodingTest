N = int(input())
num = N
count = 0

while(True):
    if len(str(num*2)) == len(str(N)):
        num *= 2
        count+=1
    else:
        break

print(count)