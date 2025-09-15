def solution(d, budget):
    answer = 0
    count = 0
    d.sort()
    
    for i in range(len(d)) :
        answer += d[i]
        count+=1
        if budget-answer < 0 :
            answer -= d[i]
            count-=1
            break
        
    return count