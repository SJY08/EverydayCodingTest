function solution(n) {
    let num_arr = [...n.toString()].map(v => parseInt(v))
    let sorted_arr = num_arr.sort((a,b) => b-a)
    return parseInt(sorted_arr.join(""))
}