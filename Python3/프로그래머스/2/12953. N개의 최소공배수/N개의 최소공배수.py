def solution(arr) :
    answer = 1
    
    for v in arr :
        answer = lcm(answer, v)
    
    return answer

def gcd(a, b) :
    if ( b == 0 ) : return a
    return gcd(b, a%b)

def lcm(a, b) : return a*b / gcd(a, b)