function solution(n) {
    let answer = 0
    for(let i = 1; i <= n ; i++){
        let a = 0
        for(let j = 1; j <= i ; j++) if(i%j==0) a++
        if(a>2) answer++
    }
    return answer
}