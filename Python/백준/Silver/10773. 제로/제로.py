num = int(input())
stk = []

for i in range(num):
    price=int(input())
    if price == 0: stk.pop()
    else : stk.append(price)

print(sum(stk))