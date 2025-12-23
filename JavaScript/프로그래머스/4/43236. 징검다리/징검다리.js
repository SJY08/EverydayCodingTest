function solution(distance, rocks, n) {
    let answer = 0
    rocks.sort((a,b) => a-b)
        
    let left = 1;
    let right = distance;
        
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        let deleteRocks = 0
        let prevRock = 0
            
        for(let rock of rocks) {
            if (rock - prevRock < mid) {
                deleteRocks++
            } else {
                prevRock = rock
            }
        }
            
        if (distance - prevRock < mid) {
            deleteRocks++
        }
            
        if (deleteRocks > n) {
            right = mid - 1
        } else if (deleteRocks <= n) {
            left = mid + 1
            answer = mid
        }
    }
        
    return answer
}