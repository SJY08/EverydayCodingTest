def solution(s):
    stack = []
    
    for i in range(len(s)) :
        if not len(stack) : 
            stack.append(s[i])
            continue
        
        last = stack[-1]
        if last == s[i] : stack.pop()
        else : stack.append(s[i])
    
    
    if not len(stack) : return 1
    return 0