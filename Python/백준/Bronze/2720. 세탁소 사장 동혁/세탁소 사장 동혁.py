n = int(input())

for i in range(n):
    money = int(input())
    quarter = money // 25
    money %= 25
    dime = money // 10
    money %= 10
    nickel = money // 5
    money %= 5
    print(quarter, dime, nickel, money)