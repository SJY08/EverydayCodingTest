function solution(score) {
    let avg = score.map(v=> (v[0] + v[1])/2)
    return avg.map(v => avg.slice().sort((a,b) => b-a).indexOf(v) + 1)
}