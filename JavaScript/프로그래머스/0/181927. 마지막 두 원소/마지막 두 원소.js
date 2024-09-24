// function solution(num_list) {
//     const last = num_list[num_list.length-1]
//     const secondLast = num_list[num_list.length-2]
//     last>secondLast? num_list.push(last-secondLast) : num_list.push(last*2)
//     return num_list
// }

let solution=num_list=>num_list[num_list.length-1]>num_list[num_list.length-2]?[...num_list,num_list[num_list.length-1]-num_list[num_list.length-2]]:[...num_list,num_list[num_list.length-1]*2]