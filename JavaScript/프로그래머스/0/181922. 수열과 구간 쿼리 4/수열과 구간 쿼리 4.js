function solution(arr, queries) {
    for(let i = 0 ; i < queries.length ; i++){
        let [s,e,k] = queries[i]
        for(let j = 0 ; j < arr.length ; j++){
            if ( s<= j && j<=e && j%k==0) arr[j]++
        }
    }
    return arr
}