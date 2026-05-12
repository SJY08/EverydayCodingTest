function solution(n) {
    let answer = 0
    const col = Array(n).fill(false)
    const diag1 = Array(2 * n).fill(false)
    const diag2 = Array(2 * n).fill(false)

    function dfs(row) {
        if (row === n) {
            answer++
            return
        }

        for (let c = 0; c < n; c++) {
            const d1 = row + c
            const d2 = row - c + n

            if (col[c] || diag1[d1] || diag2[d2]) continue

            col[c] = true
            diag1[d1] = true
            diag2[d2] = true

            dfs(row + 1)

            col[c] = false
            diag1[d1] = false
            diag2[d2] = false
        }
    }
    dfs(0)

    return answer
}