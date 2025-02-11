function solution(sizes) {
    sizes = sizes.map(v => v.sort((a,b) => a-b))
    let w = Math.max(...sizes.map(v => v[0]))
    let h = Math.max(...sizes.map(v => v[1]))
    return w*h
}