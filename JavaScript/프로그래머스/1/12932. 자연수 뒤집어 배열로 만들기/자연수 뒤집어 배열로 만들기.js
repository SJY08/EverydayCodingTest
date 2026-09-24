function solution(n) {
    // 문자열로 변환 후 spread 시켜서 배열 -> map함수로 숫자 배열로 변환
    let number_arr = [...n.toString()].map(v => parseInt(v))
    
    return number_arr.reverse()
}