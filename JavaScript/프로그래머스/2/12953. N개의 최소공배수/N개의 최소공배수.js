function solution(arr) {
    let answer = 1
    
    for(let v of arr) {
        answer = lcm(answer, v)
    }
    
    return answer
}

function gcd(a, b) {
    if ( b == 0 ) return a
    return gcd(b, a%b)
}

function lcm(a, b) {
    return a*b / gcd(a, b)
}