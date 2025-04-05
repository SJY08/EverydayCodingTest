import kotlin.math.*

class Solution {
    fun solution(numbers: IntArray): Int {
        numbers.sort()
        return max(numbers[0] * numbers[1], numbers[numbers.size - 1] * numbers[numbers.size - 2])
    }
}