import kotlin.math.sqrt

class Solution {
    fun solution(n: Int): Int {
        val sqrt = sqrt(n.toDouble()).toLong()
        return if (sqrt * sqrt == n.toLong()) 1 else 2
    }
}