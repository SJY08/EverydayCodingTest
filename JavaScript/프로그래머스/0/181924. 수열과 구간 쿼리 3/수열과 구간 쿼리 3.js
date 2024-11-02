function solution(arr, queries) {
    for(let v of queries){
        let [i,j]=v
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    return arr
}