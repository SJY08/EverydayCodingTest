function solution(dots) {
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    let a = (y1-y2)/(x1-x2)
    let a1 = (y3-y4)/(x3-x4)
    if (a==a1) return 1
    
    let b = (y1-y3)/(x1-x3)
    let b1 = (y2-y4)/(x2-x4)
    if (b==b1) return 1
    
    let c =(y1-y4)/(x1-x4)
    let c1 = (y2-y3)/(x2-x3)
    if (c==c1) return 1
    
    return 0 
}