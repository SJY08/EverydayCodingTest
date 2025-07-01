function solution(n,a,b){
    let answer = 1
    while(a != b) {
        a = Math.floor((a+1)/2)
        b = Math.floor((b+1)/2)
        answer++
    }
    return answer-1
}