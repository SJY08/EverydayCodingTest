function solution(n, times) {
    const sorted = times.sort((a, b) => a - b)
    let answer = 1
    let end = sorted[sorted.length - 1] * n
    
    while (answer <= end) {
        const mid = Math.floor((answer + end) / 2)
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)

        if (sum < n) {
            answer = mid + 1
        } else {
            end = mid - 1
        }
    }
    
    return answer
}