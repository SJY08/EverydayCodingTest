function solution(code) {
    let mode = false
    let ret = ""
    
    for(let i = 0 ; i < code.length ; i ++) {
        if ( !mode ) {
            if (code[i] != 1 && i%2 == 0) ret += code[i]
            else if (code[i] == 1) mode = true
        } else {
            if (code[i] != 1 && i%2!=0) ret += code[i]
            else if (code[i] == 1) mode = false
        }
    }
    
    return ret || "EMPTY"
}