function solution(maps) {
    let n = maps.length
    let m = maps[0].length
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    let bfs = () => {
        let queue = [[0, 0, 1]]
        maps[0][0] = 0

        while (queue.length > 0) { 
            let [row, col, distance] = queue.shift()

            if (row == n - 1 && col == m - 1) {
                return distance
            }

            for (let [r, c] of dir) {
                let newRow = row + r
                let newCol = col + c 

                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && maps[newRow][newCol] === 1) {
                    queue.push([newRow, newCol, distance + 1])
                    maps[newRow][newCol] = 0
                }
            }
        }
        return -1
    };

    return bfs()
}