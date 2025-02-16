function solution(k, tangerine) {
    let arr = new Array(Math.max(...tangerine)+1).fill(0)
    
    for(let v of tangerine) arr[v]++
    arr.sort((a,b) => b-a)
    let idx = 0
    while(k > 0) {
        k -= arr[idx]
        idx++
    }
    return idx
}