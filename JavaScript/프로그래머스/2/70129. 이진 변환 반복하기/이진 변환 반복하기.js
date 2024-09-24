function solution(s) {
    let count=0,del=0
    
    while(s!=1){
        let tmp = s.replaceAll("0",'')
        del+=s.length-tmp.length
        s=s.replaceAll("0","").length.toString(2)
        count++
    }
    
    return[count,del]
}