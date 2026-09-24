function solution(slice, n) {
    let answer = 1
    for(;answer * slice < n;) {
        answer ++
    }
    return answer
}