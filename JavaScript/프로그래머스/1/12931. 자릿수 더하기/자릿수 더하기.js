function solution(n) {
    // 문자열로 변환
    let numbers = n.toString()
    let answer = 0
    
    for(let num of numbers) {
        answer += parseInt(num)
    }
    
    return answer
    
}