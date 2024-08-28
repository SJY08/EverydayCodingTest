function solution(arr) {
    let answer = [];
    for(let v of arr) if(v!=Math.min(...arr)) answer.push(v)
    return answer.length ? answer : [-1];
}