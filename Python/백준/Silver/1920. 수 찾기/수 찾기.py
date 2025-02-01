N = int(input())
A = set(map(int, input().split()))
M = int(input())
check_list = list(map(int, input().split()))

for v in check_list:
    if v in A : print(1)
    else : print(0)