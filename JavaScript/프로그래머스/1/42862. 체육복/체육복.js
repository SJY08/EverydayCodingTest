/*
return 체육수업을 들을 수 있는 학생의 최댓값

1. 리턴시킬 answer 변수에 도난당하지 않은 학생 수 대입 후 선언

2. 도난 당한 학생의 수(lost)만큼 반복
    2-1. lost[i]의 값을 지닌 변수 선언(lostNum)
    
    2-2. 여분의 옷이 있는 학생의 수(reserve) 만큼 반복
        2-2-1. reserve[j]의 값을 지닌 변수 선언(reserveNum)
        2-2-2. 만약 reserveNum이 lostNum과 1 차이 난다면(+- 상관없이)
            2-2-2-1. 체육 수업을 들을 수 있는 학생 수 증가
            2-2-2-2. reserve[j]에 -1 값
                -> 이미 옷을 빌려준 상태이므로 다시 체크되지 않도록
            2-2-2-3. 반복 종료
        
3. answer 반환

아니 잠시만요 왜 여벌이 있는데 잃어버린애까지 체크해요 아 진짜 에반데
아 그래 도난이면 세야지 아아아악

수정 후)

1. 도난당하고 여벌도 없는 안타까운 친구의 수가 대입된 변수 선언(realLost)
2. 여벌도 있고 도난도 안당한 개쩌는 친구의 수가 대입된 변수 선언(realReserve)
3. 체육복을 빌릴 수 있는 학생수가 대입된 변수 선언(answer)

4. realLost의 길이만큼 반복
    4-1. lostNum 변수에 realLost[i] 대입해서 선언
    4-2. realReserve의 길이만큼 반복
        4-2-1. reserveNum 변수에 realReserve[j] 대입해서 선언
        4-2-2. reserveNum이 lostNum과 1차이 난다면
            4-2-2-1. answer 값 증가
            4-2-2-2. realReserve[j]에 -1 대입
                -> 다시 카운트 하는것 방지
            4-2-2-3. 반복 중지
5. answer 반환
*/


function solution(n, lost, reserve) {
    let realLost = lost.filter(v=>!reserve.includes(v)).sort((a,b)=>a-b)
    let realReserve = reserve.filter(v=>!lost.includes(v)).sort((a,b)=>a-b)
    let answer = n-realLost.length
    
    for(let i = 0 ; i < realLost.length ; i++){
        let lostNum = realLost[i]
        
        for (let j = 0 ; j < realReserve.length ; j++){
            let reserveNum = realReserve[j]
            if(reserveNum == lostNum-1 || reserveNum == lostNum+1){
                answer ++
                realReserve[j]=-1
                break
            }
        }
    }
    
    return answer
}