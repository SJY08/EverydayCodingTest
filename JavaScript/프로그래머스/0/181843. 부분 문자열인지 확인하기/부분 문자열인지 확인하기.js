// let solution =(my_string,target) => my_string.includes(target)?1:0

function solution(my_string,target){
    for(let i = 0 ; i < my_string.length ; i++) if(my_string.slice(i).startsWith(target)) return 1
    return 0
}