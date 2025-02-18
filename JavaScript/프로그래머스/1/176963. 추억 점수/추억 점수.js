function solution(name, yearning, photo) {
    let answer = []
    name = name.slice(0, yearning.length)
    
    for (let v of photo) {
        let score = 0
        v = v.filter(a => name.includes(a))
        v.forEach(a => {
            let idx = name.indexOf(a)
            score += yearning[idx]
        })
        answer.push(score)
    }
    return answer
}