/*
return 만들 수 있는 가장 큰 숫자(문자열)

1. 리턴 시킬 배열 생성(answer)

2. number의 길이만큼 반복
    2-1. answer의 길이가 0 초과이고 answer의 마지막 값이 number[i] 미만이고 k가 0 초과일때 반복
        2-1-1. k 감소
        2-1-2. answer 마지막 값 삭제
    2-2. answer에 number[i] 값 추가

3. answer에서 number의 길이에서 k를 뺀 값부터 k만큼 삭제

4. answer를 문자열 형태로 합친 후 반환
*/

function solution(number, k) {
    let answer = []
    
    for(let i = 0 ; i<number.length; i++){
        while(answer.length>0 && answer[answer.length-1] < number[i] && k>0){
            k--;
            answer.pop()
        }
        answer.push(number[i])
    }
    
    answer.splice(number.length-k,k)
    
    return answer.join("")
}