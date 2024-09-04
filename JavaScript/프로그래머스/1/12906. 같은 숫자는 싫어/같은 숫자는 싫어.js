/*

return 연속적으로 나타나는 숫자는 제거하고 남은 수

1. stack 배열 생성
2. arr 배열 반복
 2-1.stack[stack.length-1] != arr[i]인가?
    - stack.push(arr[i])
return stack

*/

function solution(arr){
    let stack = []
    for(let i = 0 ; i < arr.length ; i++){
        if(stack[stack.length-1] != arr[i])
            stack.push(arr[i])
    }
    return stack
}