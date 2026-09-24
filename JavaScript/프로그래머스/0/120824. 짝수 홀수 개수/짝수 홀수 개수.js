function solution(num_list) {
    // 홀수, 짝수
    let odd = 0, even = 0
    
    for(let num of num_list) {
        if(num % 2 == 0) even ++
        else odd ++
    }
    
    return [even, odd]
}