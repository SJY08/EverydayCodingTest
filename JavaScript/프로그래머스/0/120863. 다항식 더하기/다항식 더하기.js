function solution(polynomial) {
    let x = polynomial.split(" ").filter(v=> v.includes("x")).map(v=> v == "x" ? "1x" : v).map(v=> +v.slice(0, v.length-1)).reduce((a,b) => a+b, 0)
    let num = polynomial.split(" ").map(v=> +v).filter(v=> !isNaN(v)).reduce((a,b) => a+b, 0)
    
    if (x != 0 && num) {
        if (x==1) return `x + ${num}` 
        return `${x}x + ${num}`
    }
    else if (x != 0 && !num){
        if (x==1) return "x"
        return `${x}x`
    }
    else return num+""
}