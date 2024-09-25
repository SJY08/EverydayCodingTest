function solution(s)
{
    let stack = []
    
    for(let i = 0 ; i < s.length ; i++){
        if(!stack.length){
            stack.push(s[i])
            continue
        }
        
        let last = stack[stack.length-1]
        if(last == s[i]) stack.pop()
        else stack.push(s[i])
    }
    
    if(!stack.length) return 1
    return 0
}