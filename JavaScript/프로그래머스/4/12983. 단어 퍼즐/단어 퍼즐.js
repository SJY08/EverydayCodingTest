function solution(strs, t) {
    let dp = Array(t.length + 1).fill(Infinity)
    dp[0] = 0
    
    for(let i = 1 ; i <= t.length ; i ++) {
        for(let j = 0 ; j < strs.length ; j++) {
            let str = strs[j]
            if ( i >= str.length && t.substring(i-str.length, i) == str) dp[i] = Math.min(dp[i], dp[i - str.length]+1)
        }
    }
    
    return dp[t.length] == Infinity ? -1 : dp[t.length]
}