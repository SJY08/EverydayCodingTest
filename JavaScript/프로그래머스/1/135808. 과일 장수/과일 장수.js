function solution(k, m, score) {
    let answer = 0
    score.sort((a,b) => b-a)
    for(let i = 0 ; i < score.length ; i += m) {
        const box = score.slice(i, i + m)
        if(box.length < m) continue
        else answer += box[m-1] * m
    }
    return answer
}