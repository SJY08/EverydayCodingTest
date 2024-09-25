/*
return 가격이 떨어지지 않은 기간이 담긴 배열

0. answer 변수 선언
1.prices 반복
    
2. now 변수 선언, prices[i] 대입 && sec 변수 선언 0 대입
2-1. i가 prices의 마지막인덱스 ?
        answer에 sec 푸시

3. prices를 i인덱스 다음부터 반복
    3-1. now가 prices[j] 이하라면
        sec 1 증가
    3-2. now가 prices[j]보다 크다면
        answer에 sec+1 값을 푸시
        반복 종료(break)
    3-3. j가 prices의 마지막 인덱스라면?
        answer에 sec 푸시
answer 반환
*/

function solution(prices){
    let answer = []
    
    for(let i = 0 ; i < prices.length ; i++){
        let now = prices[i]
        let sec = 0
        if(i == prices.length-1) answer.push(sec)
        else {
            for(let j = i+1 ; j < prices.length ; j++){
                if(now <= prices[j]) sec++
                else if(now > prices[j]){
                    answer.push(sec+1)
                    break
                }
                if(j == prices.length-1) answer.push(sec)
            }
        }
    }
    return answer
}