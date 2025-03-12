const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const answer = input[1].split(" ").sort((a,b) => Number(b+a) - Number(a+b)).join("")
if (Number(answer) == 0) console.log(0)
else console.log(answer)