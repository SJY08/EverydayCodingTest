def solution(arr):
    answer = [arr[0]]
    for i,v in enumerate(arr):
        if answer[-1] != v : answer.append(v)
    return answer