function solution(s) {
    let answer = []
    const tuple = s.slice(1, s.length-1).split("}").map(v=> v.startsWith("{") ? v.slice(1).split(",").map(a=> +a) : v.startsWith(",{") ? v.slice(2).split(",").map(a=> +a) : undefined).sort((a,b) => a.length - b.length).filter(v=> v !== undefined)
      
    for(let v of tuple ) answer = [...new Set([ ...answer, ...v ])]
    
    return answer
}