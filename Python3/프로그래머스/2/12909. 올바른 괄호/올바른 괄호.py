def solution(s):
    stack = []
    for v in s:
        if v == "(":
            stack.append(v)
        else: 
            if not stack:
                return False
            stack.pop()
    return len(stack) == 0
