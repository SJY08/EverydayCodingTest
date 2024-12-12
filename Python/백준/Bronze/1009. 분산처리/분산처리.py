T = int(input())
computer = {0:10, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9}
for i in range(T):
    a, b = map(int, input().split())
    a = a%10
    if a==0 : print(computer[0])
    elif a==1 or a==5 or a==6: print(a)
    elif a == 4 or a==9:
        b %= 2
        if b==1: print(a)
        else : print((a*a) % 10)
    else:
        b %= 4
        if b==0 : print((a**4) % 10)
        else : print((a**b)%10)