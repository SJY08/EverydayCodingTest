function solution(my_string) {
    let upper = Array(26).fill(0)
    let lower = Array(26).fill(0)
    
    for(let v of my_string){
        if(v == v.toUpperCase()) upper[v.charCodeAt()-65]++
        else lower[v.charCodeAt()-97]++
    }
    
    return upper.concat(lower)
}