n = int(input())

for i in range(n): 
    [num, string] = input().split()
    for i in range(len(string)):print(string[i]*int(num),end="")
    print()