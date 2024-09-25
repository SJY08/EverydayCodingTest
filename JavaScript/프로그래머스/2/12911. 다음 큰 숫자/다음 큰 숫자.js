/*
return n의 다음 큰 숫자

다음 큰 숫자의 조건 ?
1. n < 다음 큰 숫자
2. n(2진수)의 1의 개수 == 다음 큰 숫자(2진수)의 1의 개수
3. 위 조건을 부합하는 수 중 가장 작은 수

[ 코드 ]

1. next 변수에 n+1 값 넣어서 선언

2. 계속 반복
    3. n 이진수의 1의 개수와 next의 1의 개수가 같다면?
        4. next 값 반환
    5. 아니라면?
        6. next 1 증가
*/

function solution(n) {
    let next = n+1
    
    while(1){
        if(n.toString(2).replaceAll("0","").length==next.toString(2).replaceAll("0","").length) return next
        else next++
    }
}