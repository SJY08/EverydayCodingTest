function solution(a, b) {
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    let answer = min
    
    for(let i = min + 1; i <= max ; i++){
        answer += i
    }
    
    return answer
}