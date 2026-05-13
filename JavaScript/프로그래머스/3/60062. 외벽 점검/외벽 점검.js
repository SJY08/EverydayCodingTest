function solution(n, weak, dist) {
  const len = weak.length
  const extended = [...weak]

  for (let i = 0; i < len; i++) {
    extended.push(weak[i] + n)
  }

  dist.sort((a, b) => b - a)

  const permutation = (arr, r) => {
    const result = []

    const dfs = (path, visited) => {
      if (path.length === r) {
        result.push([...path])
        return
      }

      for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue

        visited[i] = true
        path.push(arr[i])

        dfs(path, visited)

        path.pop()
        visited[i] = false
      }
    }

    dfs([], Array(arr.length).fill(false))

    return result
  }

  for (let count = 1; count <= dist.length; count++) {
    const perms = permutation(dist, count)

    for (let start = 0; start < len; start++) {
      for (const friends of perms) {
        let friendIdx = 0
        let coverage = extended[start] + friends[friendIdx]
        let possible = true

        for (let idx = start; idx < start + len; idx++) {
          if (extended[idx] > coverage) {
            friendIdx++

            if (friendIdx >= count) {
              possible = false
              break
            }

            coverage = extended[idx] + friends[friendIdx]
          }
        }

        if (possible) return count
      }
    }
  }

  return -1
}