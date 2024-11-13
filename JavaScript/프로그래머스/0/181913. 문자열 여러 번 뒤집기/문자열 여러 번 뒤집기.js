function solution(my_string, queries) {
    for(let v of queries){
        let [s,e] = v
        my_string = [[...my_string].slice(0,s).join(""), [...my_string].slice(s,e+1).reverse().join(""), [...my_string].slice(e+1).join("")].join("")
    }
    return my_string
}