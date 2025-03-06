N = int(input())
users = []

for _ in range(N):
   age, name = input().split()
   age = int(age)
   users.append((age,name))

users.sort(key = lambda x: x[0])

for user in users: print(user[0], user[1])