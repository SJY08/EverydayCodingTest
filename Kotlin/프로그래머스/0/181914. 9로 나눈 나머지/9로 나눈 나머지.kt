class Solution {
    fun solution(number: String): Int {
        return number.sumOf { it.toString().toInt() } % 9
    }
}