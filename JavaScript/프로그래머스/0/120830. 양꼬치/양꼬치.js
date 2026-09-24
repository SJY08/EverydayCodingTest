function solution(n, k) {
    let answer = 0
    
    let service_count = Math.floor(n/10)
    
    return n * 12000 + (k-service_count) * 2000
}