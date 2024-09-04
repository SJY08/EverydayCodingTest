/*
return 가격이 떨어지지 않은 기간이 담긴 배열

0. answer 변수 선언
1.prices 반복
    
2. now 변수 선언, prices[i] 대입 && sec 변수 선언 0 대입
2-1. i == prices.length-1?
        answer.push(sec)

3. prices를 i인덱스 다음부터 반복
    3-1. now <= prices[j]
        sec++
    3-2. now > prices[j]
        answer.push(sec+1)
        break
    3-3. j == prices.length-1
        answer.push(sec)
return answer
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