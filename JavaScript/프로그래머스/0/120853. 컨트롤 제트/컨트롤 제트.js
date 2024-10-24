function solution(s) {
    let answer = 0
    s=s.split(" ")
    for(let i = 0 ; i<s.length ; i++){
        if(s[i] == "Z") answer -= s[i-1]
        else answer+=(+s[i])
    }
    return answer
}