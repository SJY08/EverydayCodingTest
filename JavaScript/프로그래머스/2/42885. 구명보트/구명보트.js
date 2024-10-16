/*
return 구출하기 위해 필요한 구명보트 최소 개수

1. people 리스트를 정렬
2. 왼쪽부터 시작할 인덱스 i와 오른쪽부터 시작할 인덱스 j 선언
3. return 시킬 변수 선언

4. i가 j와 만나기 전까지 반복
    4-1. 만약 people의 인덱스 i인 값과 인덱스 j인 값의 합이 무게 제한(limit)의 이하라면
        4-1-1. i의 값을 증가
    4-2. j의 값 감소
    4-3. count(구명보트의 개수) 증가

5. 반복이 끝나면 count 반환
*/

function solution(people, limit) {
    people.sort((a,b)=>a-b)
    let i = 0
    let j = people.length-1
    let count = 0
    
    while(i<=j){
        if(people[i]+people[j] <= limit) i++
        j--
        count++
    }
    
    return count
}