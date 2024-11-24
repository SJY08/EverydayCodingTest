function solution(arr) {
    let answer = 0
    let temp
    do{
        temp = arr
        arr = arr.map(v=> v>=50 && v%2==0 ? v/2 : v<50 && v%2==1 ? v*2+1 : v)
        answer++
    }while(!arr.every((v,i)=> v==temp[i]))
    return answer-1
}