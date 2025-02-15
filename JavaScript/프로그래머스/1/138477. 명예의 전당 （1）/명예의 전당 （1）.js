function solution(k, score) {
    let answer = []
    let hall = []
    
    for(let v of score) {
        if (hall.length < k) hall.push(v)
        if (v > Math.min(...hall)) {
            hall.pop()
            hall.push(v)
            hall.sort((a,b) => b-a)
        }
        answer.push(hall.at(-1))
    }
    return answer
}