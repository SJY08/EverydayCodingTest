function solution(matrix_sizes) {
    let dp = new Array(matrix_sizes.length).fill().map(_ => new Array(matrix_sizes.length).fill(Infinity))
    
    for(let i = 0 ; i < matrix_sizes.length ; i++) dp[i][i] = 0
    
    for(let i = 1 ; i < matrix_sizes.length ; i++) {
        for(let start = 0 ; start < matrix_sizes.length ; start++) {
            const end = start + i
            if ( end >= matrix_sizes.length ) break
            
            for(let fixed = start ; fixed < end ; fixed++) {
                dp[start][end] = Math.min(dp[start][end] ,  dp[start][fixed] + dp[fixed+1][end] + (matrix_sizes[start][0] * matrix_sizes[fixed+1][0] * matrix_sizes[end][1]))
            }
        }
    }
    return dp[0][matrix_sizes.length-1];
}