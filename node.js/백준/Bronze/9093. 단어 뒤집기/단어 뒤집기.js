const fs = require('fs')
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
let arr = input.map(v=> v.split(" ").map(a => a.split("").reverse().join("")).join(" "))
for(let v of arr) console.log(v)