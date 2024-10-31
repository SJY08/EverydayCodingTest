function solution(num_list) {
    let count = 0
    for(let v of num_list){
        while(v!=1){
            if(v%2==0){
                v/=2
                count++
            } else {
                v = (v-1)/2
                count++
            }
        }
    }
    return count
}