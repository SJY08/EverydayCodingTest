function solution(arr, queries) {
    let answer = []
    for(let i = 0 ; i < queries.length ; i++){
        let [s,e,k] = queries[i]
        answer.push(Math.min(...arr.filter((v,i)=> s<=i && i<=e && v>k)))
    }
    return answer.map(v=> v==Infinity ? -1 : v)
}