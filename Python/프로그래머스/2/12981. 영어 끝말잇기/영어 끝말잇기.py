import math

def solution(n, words):
    answer = [0, 0]
    
    for i in range(len(words)):
        word = words[i]
        p = i % n + 1
        turn = math.ceil((i+1)/n)
        
        if i>0 :
            last = words[i-1][-1]
            
            if i > words.index(word) or words[i][0] != last :
                answer = [p, turn]
                break
    
    return answer