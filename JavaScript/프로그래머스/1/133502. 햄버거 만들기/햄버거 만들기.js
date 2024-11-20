function solution(ingredient) {
    let answer = 0
    const stack = []
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i])
        if (stack.length >= 4) {
            let burger = stack.slice(-4).join("");
            if (burger === '1231') {
                stack.splice(-4)
                answer += 1
            }
        }
    }
    return answer;
}