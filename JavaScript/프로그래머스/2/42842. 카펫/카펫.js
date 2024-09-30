function solution(brown, yellow) {
    let size=brown+yellow
    
    for(let i = size+1 ; i>0; i--){
        if(size%i==0){
            let div = size/i
            if((i-2)*(div-2)==yellow) return [i,div]
        }
    }
}