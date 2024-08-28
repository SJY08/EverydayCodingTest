/*

return 오늘 날짜로 파기해야할 개인정보 번호들

1. terms의 조항들 확인
2. privacies의 내용 중 조항 날짜 + 유효기간 > 오늘날짜
3. 답에 privacies의 인덱스+1(번호) push

*/

function solution(today, terms, privacies) {
    let answer = []
    const obj = {}
    terms.forEach(i => {
        obj[i[0]] = parseInt(i.split(' ')[1])
    })
    
    const date = privacies.map(i => {
        let a = i.split(" ")
        return a[0].split(".").map(i=>parseInt(i))
    })
    
    const reserve = privacies.map(i => {
        let a = i.split(" ")
        return a[1]
    })
    
    for(let i = 0 ; i < reserve.length; i++){
        date[i][1] = date[i][1]+obj[reserve[i]]
        
        if(date[i][1] > 12){
            date[i][1] = date[i][1]-12
            date[i][0]++
        }
    }
    
    today = today.split(".").map(a=>+a)
    
    date.forEach((v,i) => {
        const a = new Date(...today)
        const b = new Date(...v)
        
        if(a >= b) answer.push(i+1)
    })
    
    return answer
}