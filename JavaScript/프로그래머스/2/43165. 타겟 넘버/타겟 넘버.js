

function solution(numbers, target) {
    let answer = 0
    
    function dfs(n, i, cur) {
        if ( i == n.length && cur == target) {
            answer ++
            return
        }
        else if (i == n.length && cur != target) return
        
        dfs(n, i+1, cur-n[i])
        dfs(n, i+1, cur+n[i])
    }
    dfs(numbers,0,0)
    
    return answer
}