class Solution {
    fun solution(n: Int, t: Int): Int {
        var answer: Int = n
        for(i:Int in 0..(t-1)) answer*=2
        return answer
    }
}