function solution(operations) {
    let answer = [];
    let tmp = [];
    
    for(let i of operations){
        if(i.includes("I")) answer.push(+i.slice(2))
        else if(i.includes("D 1")){
            let max = Math.max(...answer)
            for(let v of answer) if(v != max) tmp.push(v)
            answer = tmp;
            tmp = []
        }
        else if(i.includes("D -1")){
            let min = Math.min(...answer)
            for(let v of answer) if(v!=min) tmp.push(v)
            answer=tmp;
            tmp = []
        }
    }
    return answer.length? [Math.max(...answer),Math.min(...answer)] : [0,0];
}