//let solution = (str_list, ex) => str_list.filter(v=>!v.includes(ex)).join("")

function solution(str_list,ex){
    let answer = ""
    for(let v of str_list){
        let a = true
        for(let i = 0 ; i < v.length ; i++){
            if(v.slice(i,i+ex.length)==ex){
                a=false
                break
            }
        }
        if(a) answer+=v
    }
    return answer
}