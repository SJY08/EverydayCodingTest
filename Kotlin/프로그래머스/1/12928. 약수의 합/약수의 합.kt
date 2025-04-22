class Solution {
    fun solution(n: Int): Int {
        var answer = 0
        for(i:Int in 1..n) if(n%i == 0) answer += i
        return answer
    }
}