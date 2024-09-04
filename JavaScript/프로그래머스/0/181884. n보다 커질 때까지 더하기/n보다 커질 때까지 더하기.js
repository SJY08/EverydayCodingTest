function solution(numbers,n){
    let answer = 0 ;
    for(let i = 0 ; answer <= n ; i++) answer += numbers[i]
    return answer
}