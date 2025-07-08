def solution(my_string, alp):
    answer = ''
    for v in my_string:
        if v == alp : answer += v.upper()
        else : answer += v
    return answer