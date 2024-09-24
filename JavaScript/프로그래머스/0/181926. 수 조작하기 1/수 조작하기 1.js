//let solution = (n,control) => n+[...control].map(v=>v=="w"?1:v=="s"?-1:v=="d"?10:-10).reduce((a,b)=>a+b,0)

function solution(n,control){
    for(let v of control){
        switch(v){
            case "w": n+=1; break
            case "s": n-=1; break
            case "d": n+=10; break
            case "a": n-=10; 
        }
    }
    return n
}