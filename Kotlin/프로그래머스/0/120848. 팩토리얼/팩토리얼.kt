class Solution {
    fun fact(n: Int):Int {
        if (n == 1) return 1
        return fact(n-1) * n
    }
    
    fun solution(n: Int): Int {
        var answer: Int = 0
        
        for (i in 10 downTo 1) {
            if(fact(i) <= n) {
                answer = i
                break
            }
        }
        
        return answer
    }
}