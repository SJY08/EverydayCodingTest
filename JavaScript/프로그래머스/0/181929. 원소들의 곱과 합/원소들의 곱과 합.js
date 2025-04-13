function solution(num_list) {
    let rhq = num_list.reduce((a,b) => a*b, 1)
    let gkq = num_list.reduce((a,b) => a+b, 0)**2
    if( rhq < gkq ) return 1
    return 0
}