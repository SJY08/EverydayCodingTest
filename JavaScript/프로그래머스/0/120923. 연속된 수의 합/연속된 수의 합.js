function solution(num, total) {
    const middle = Math.floor(total / num)
    const answer = []
    for(let i = middle-Math.floor((num-1)/2) ; i < middle + Math.floor((num+2)/2) ; i++) answer.push(i)
    return answer
}