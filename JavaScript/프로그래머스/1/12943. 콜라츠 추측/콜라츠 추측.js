function solution(num) {
    if(num == 1) return 0
    let count = 0 ;
    while(1){
        if(count==500) return -1
        if(num%2==0){
            num/=2
            count++
        }
        else{
            num = num*3+1
            count++
        }
        if(num==1) return count
    }
}