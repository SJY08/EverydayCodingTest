answer = 0

for i in range(8) :
    line = input()
    for v in range(len(line)) :
        if i % 2 == 0 and v % 2 == 0 and line[v] == "F" : answer += 1
        elif i % 2 != 0 and v % 2 != 0 and line[v] == "F" : answer += 1
            
print(answer)