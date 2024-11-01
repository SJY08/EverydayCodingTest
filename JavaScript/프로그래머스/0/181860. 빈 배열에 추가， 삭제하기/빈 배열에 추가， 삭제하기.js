function solution(arr, flag) {
   let answer = []
   for(let i = 0 ; i < flag.length ; i++){
        if(flag[i]) for(let v = 0 ; v < arr[i]*2 ; v++) answer.push(arr[i])
       else for(let v = 0 ; v < arr[i] ; v++) answer.pop()
   }
    return answer
}