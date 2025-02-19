function solution(citations) {
    let answer = 0
    citations.sort((a,b) => b-a)
    for(let i = 1 ; i <= citations.length ; i++) {
        answer = Math.max(answer, Math.min(i, citations[i-1]))
    }
    return answer
}