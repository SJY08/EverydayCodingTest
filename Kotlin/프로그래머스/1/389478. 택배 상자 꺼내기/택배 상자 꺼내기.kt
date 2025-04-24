class Solution {
    fun solution(n: Int, w: Int, num: Int): Int {
        var answer: Int = 0
        var num1 = num
        while(num1 <= n) {
            num1 += (w - ((num1 - 1) % w) - 1) * 2 + 1
            answer ++
        }
        
        return answer
    }
}