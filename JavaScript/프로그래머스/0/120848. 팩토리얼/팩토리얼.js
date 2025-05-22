function solution(n) {
    let dp = new Array(10).fill(0)
    dp[0] = 0
    dp[1] = 1
    
    for(let i = 2 ; i < 11 ; i++) {
        dp[i] = dp[i-1] * i
    }
    
    return dp.filter(v=> v<=n).length-1
}

