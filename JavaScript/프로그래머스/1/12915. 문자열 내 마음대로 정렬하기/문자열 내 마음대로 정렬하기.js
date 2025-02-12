function solution(strings, n) {
    strings.sort()
    let idx_n = [...new Set(strings.map(v => v[n]).sort())]
    let answer = []
    
    for(let v of idx_n) {
        for(let str_v of strings) {
            if ( str_v[n] == v ) answer.push(str_v)
        }
    }
    
    return answer
}