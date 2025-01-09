function solution(n,a,b){
    let answer = 1
    while(a != b) {
        a = Math.round(a/2)
        b = Math.round(b/2)
        answer++
    }
    return answer-1
}