function solution(arr, queries) {
    for(let v of queries){
        let [s,e] = v
        for(let i = 0 ; i < arr.length ; i++){
            if(s<=i && i<=e) arr[i]++
        }
    }
    return arr
}