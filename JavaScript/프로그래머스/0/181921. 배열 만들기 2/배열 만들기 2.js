function solution(l, r) {
    let answer = []
    for(let i = l ; i <= r; i++){
        if([...""+i].every(v=> v==5 || v==0))
            answer.push(i)
    }
    return answer.length ? answer : [-1]
}