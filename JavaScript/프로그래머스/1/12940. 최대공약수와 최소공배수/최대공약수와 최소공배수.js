function solution(n, m) {
    let answer = []
    for(let i = Math.min(n,m) ; i >=1 ; i--) if(n%i == 0 && m%i==0) {answer.push(i); break}
    for(let i = Math.max(n,m) ; answer.length<2 ; i++) if(i%n==0 && i%m==0) answer.push(i)
    return answer
}