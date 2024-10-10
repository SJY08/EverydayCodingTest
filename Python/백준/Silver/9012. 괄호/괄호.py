num = int(input())

for i in range(num):
    s=input()
    a = 0
    for v in s:
        if v=="(": a+=1
        elif v==")": a-=1
        if a<0: break
    if a!=0: print("NO")
    else : print("YES")