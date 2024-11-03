function fact(n){
    if(n<2) return 1
    return n*fact(n-1)
}

function solution(n) {
    let num=1
    for(;;){
        if(fact(num) > n) return num-1
        else if(fact(num) == n) return num
        else num++
    }
}

