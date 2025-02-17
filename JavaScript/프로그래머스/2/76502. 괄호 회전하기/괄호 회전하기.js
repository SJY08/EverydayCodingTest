function solution(s) {
    let answer = 0
    let stack = []
    if ( s.length % 2 == 1) return 0
    
    for(let i = 0 ; i < s.length ; i ++) {
        let paren = s.slice(i) + s.slice(0,i)
        let isCorrect = true
        
        for(let v of paren) {
            if ( v == "[" || v == "{" || v =="(") stack.push(v)
            else {
                let last = stack.pop()
                if (last == "(" && v == ")") continue
                if (last == "{" && v == "}") continue
                if (last == "[" && v == "]") continue
                isCorrect = false
                break
            }
        }
        if (isCorrect) answer ++
    }
    return answer
}