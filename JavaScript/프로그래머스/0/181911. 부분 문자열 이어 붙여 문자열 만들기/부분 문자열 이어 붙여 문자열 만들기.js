/*
let solution = (my_strings, parts) => my_strings.map((v,i) => v.slice(parts[i][0],parts[i][1]+1)).join("")
*/

function solution(my_strings, part){
    let answer = ''
    
    for(let i = 0 ; i < my_strings.length ; i++){
        answer+= my_strings[i].slice(part[i][0],part[i][1]+1)
    }
    
    return answer
}