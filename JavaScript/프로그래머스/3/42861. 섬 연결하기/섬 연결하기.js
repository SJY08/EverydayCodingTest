function solution(n, costs) {
    let answer = 0
    const graph = Array.from({ length: n }, () => [])

    for (let [from, to, cost] of costs) {
        graph[from].push([to, cost])
        graph[to].push([from, cost])
    }

    const visited = Array(n).fill(false)
    visited[0] = true
    let edges = graph[0]

    while (true) {
        let minCost = Infinity
        let nextNode = -1

        for (let [to, cost] of edges) {
            if (!visited[to] && cost < minCost) {
                minCost = cost
                nextNode = to
            }
        }

        if (nextNode === -1) break

        visited[nextNode] = true
        answer += minCost
        edges.push(...graph[nextNode])
    }

    return answer
}