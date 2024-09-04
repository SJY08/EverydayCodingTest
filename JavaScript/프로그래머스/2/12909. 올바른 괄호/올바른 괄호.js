/*
return 올바른 괄호 ? true : false

1. stack 배열 생성
2. s 반복
 2-1. stack.length == 0 && s[i] == ")" ?
    - return false
 2-2. stack[stack.length-1] == "(" && s[i] == ")" ?
    - stack.pop()
 2-3. 아니라면?
    - stack.push(s[i])
 

3. stack의 길이가 1 이상인가 ? false 반환
4. stack의 길이가 0인가 ? true 반환
*/

function solution(s) {
    let stack = []
    for(let v of s){
        if(stack.length == 0 && v ==")") return false
        if(stack[stack.length-1] == "(" && v == ")") stack.pop()
        else stack.push(v)
    }
    return stack.length?false:true
}