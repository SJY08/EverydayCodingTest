function solution(answers) {
    const answer1 = [1,2,3,4,5]
    const answer2 = [2,1,2,3,2,4,2,5]
    const answer3 = [3,3,1,1,2,2,4,4,5,5]
    
    const getAnswer = (answer) => {
        return answers.filter((v,i) => v == answer[i%answer.length]).length
    }
    
    const a1 = getAnswer(answer1)
    const a2 = getAnswer(answer2)
    const a3 = getAnswer(answer3)
    
    const max = Math.max(a1,a2,a3)
    
    return [a1, a2, a3].map((v,i)=> v == max ? i+1 : 0).filter(v=>v>0)
}