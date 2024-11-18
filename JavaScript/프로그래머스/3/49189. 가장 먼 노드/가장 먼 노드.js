function solution(n, edge) {
    let answer = 0
    let queue = [1]
    let dist = new Array(n+1).fill(-1)
    dist[1] = 0
    let graph = new Array(n+1).fill(0).map(e => [])
    
    for (let v of edge) {
        graph[v[0]].push(v[1])
        graph[v[1]].push(v[0])
    }

    while (queue.length != 0) {
        let node = queue.shift()
        for (let i = 1; i <= n; i++) {
            if (graph[node].indexOf(i) != -1 && dist[i] == -1) {
                dist[i] = dist[node] + 1
                queue.push(i)
            }
        }
    }
    return dist.filter(v=>v==Math.max(...dist)).length
}