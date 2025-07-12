function solution(n) {
    n += ""
    let answer = 0
    for(let v of n) answer += +v
    return answer
}