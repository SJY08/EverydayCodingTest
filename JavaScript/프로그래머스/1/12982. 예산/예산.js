function solution(d, budget) {
    let answer = 0;
    let count = 0
    d.sort((a,b)=>a-b)
    for(let i = 0 ; i < d.length ; i++){
        answer += d[i]
        count++
        if(budget-answer < 0){
            answer -= d[i]
            count--
            break
        }
    }
    return count
}