function solution(n) {
    let answer = 0;
    for(let i = 0 ; i <= n ; i++) if(i**2 == n) return (i+1)**2
    return -1;
}