function solution(n, count) {
    let arr = Array.from({ length: n + 1 }, () => Array(count + 1).fill(0))
    arr[1][1] = 1
    
    for(let i = 2; i <= n ; i++) {
        for(let j = 1; j <= count ; j++) {
            arr[i][j] = arr[i-1][j] * (i-1) * 2 % 1000000007 + arr[i-1][j-1]
            arr[i][j] %= 1000000007
        }
    }
    
    return arr[n][count]
}