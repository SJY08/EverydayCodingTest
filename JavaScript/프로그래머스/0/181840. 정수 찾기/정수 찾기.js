// let solution = (num_list,n) => num_list.includes(n)?1:0
let solution = (num_list,n) => num_list.some(v=>v==n)?1:0