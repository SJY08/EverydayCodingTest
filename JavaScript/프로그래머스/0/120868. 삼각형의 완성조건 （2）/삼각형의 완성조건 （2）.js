function solution(sides) {
    let answer = 0
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let added = sides[0]+sides[1]
    for(let i = max-min ; i <= max ; i++){
        if(i+min > max) answer++
    }
    for(let i = max+1 ; i < max+min ; i++)
        if(i<added) answer ++
    return answer
}