function solution(tickets) {
    tickets.sort()
    const visited = Array(tickets.length).fill(false)
    const path = ["ICN"]
    let answer = []

    function dfs(cur, count) {
        if (count === tickets.length) {
            answer = [...path]
            return true
        }

        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i]

            if (!visited[i] && from === cur) {
                visited[i] = true
                path.push(to)

                if (dfs(to, count + 1)) return true

                path.pop()
                visited[i] = false
            }
        }
        return false
    }

    dfs("ICN", 0)

    return answer
}