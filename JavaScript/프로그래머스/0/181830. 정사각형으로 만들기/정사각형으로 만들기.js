function solution(arr) {
    if (arr.length == arr[0].length) return arr
    if (arr.length < arr[0].length) for(; arr.length < arr[0].length;) arr.push(new Array(arr[0].length).fill(0))
    else for(let i = 0 ; i < arr.length ; i++) arr[i] = arr[i].concat(new Array(arr.length).fill(0)).slice(0,arr.length)
    return arr
}