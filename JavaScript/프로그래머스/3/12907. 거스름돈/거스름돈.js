function solution(n, money) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    
    for(let v of money){
        for(let i = v ; i <= n ; i++ ){
            dp[i] += dp[i-v]
        }
    }
    
    return dp[n]%1000000007
}