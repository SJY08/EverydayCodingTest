class Solution {
    fun solution(angle: Int): Int {
        return if (angle < 90) 1 else if (angle == 90) 2 else if (angle < 180) 3 else 4
    }
}