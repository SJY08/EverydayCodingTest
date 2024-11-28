function solution(balls, share) {
    return Math.round(f(balls) / (f(balls-share) * f(share)))
}

function f(n){
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    for(let i = 1; i < n+1 ; i++) dp[i] = dp[i-1]*i
    return dp[n]
}