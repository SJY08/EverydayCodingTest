function solution(n, w, num) {
    let answer = 0
    while (num <= n) {
	    num += (w - ((num - 1) % w) - 1) * 2 + 1
        answer ++
    }
    return answer
}