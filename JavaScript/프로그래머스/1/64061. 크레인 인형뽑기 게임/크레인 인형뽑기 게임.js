/*
return 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수

1. stack 배열, answer(사라진 인형 개수) 변수 선언
2. moves 반복
3. board 반복
    3-1. board[j][현재위치] != 0?
        - stack[stack.length-1] == board[j][현재위치] ?
            stack.pop()
            answer+=2
        - 아니라면 ?
            stack.push(board[j][현재위치])
        board[j][+1]에 0 대입(인형을 뽑았으니)
        반복 끝

return answer
*/

function solution(board, moves) {
    let stack = []
    let answer = 0
    
    for(let v of moves){
        for(let j = 0 ; j < board.length ; j++){
            if(board[j][v-1] != 0){
                if(stack[stack.length-1] == board[j][v-1]){
                    stack.pop()
                    answer+=2
                }
                else stack.push(board[j][v-1])
                
                board[j][v-1] = 0
                break
            }
        }
    }
    return answer;
}