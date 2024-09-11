/*
return 각 배포마다 몇개의 기능이 배포되는지에 대한 배열

1. 각 배포 별 걸리는 일 수 배열 선언 (leftDay)
2. leftDay의 첫번째 값을 변수에 저장(progress), 걸리는 일 수(day = 1) 변수 선언
3. 배포 반복(i = 1부터)
4. 만약 progress보다 left[i] 값이 작거나 같다면
    - day 값 증가
5. 아니면 ?
    - answer 배열에 day 푸시
    - progress = leftDay[i]
    - day = 1
6. 만약 i가 마지막 인덱스라면?
    - answer 배열에 day 푸시
*/

function solution(progresses, speeds) {
    let answer = [];
    let leftDay = progresses.map((v,i) => Math.ceil((100-v)/speeds[i]))
    let progress = leftDay[0]
    let day = 1
    for(let i = 1 ; i < progresses.length; i++){
        if(progress >= leftDay[i]) day++
        else {
            answer.push(day)
            progress = leftDay[i]
            day = 1
        }
        if(i==progresses.length-1) answer.push(day)
    }
    return answer;
}