function solution(A, B) {
    let answer = 0
    if (A == B) return 0
    
    for(let i = 0 ; i < A.length ; i++) {
        answer++
        A = [A[A.length-1], ...A.slice(0, A.length-1)].join("")
        if ( A == B ) break
        if (i == A.length-1 ) return -1
    }
    
    return answer
}