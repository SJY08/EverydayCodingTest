function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let answer = ""
    
    for(let v of s) {
        if ( v == " ") {
            answer += " "
            continue
        }
        
        let text = upper.includes(v) ? upper : lower
        let idx = text.indexOf(v) + n
        if(idx >= text.length) idx -= text.length
        answer += text[idx]
    }
    return answer
}