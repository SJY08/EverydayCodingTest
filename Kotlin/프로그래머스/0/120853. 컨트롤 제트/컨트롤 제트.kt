class Solution {
    fun solution(s: String): Int {
        var arr = s.split(" ")
        var answer = 0
        arr.forEachIndexed { i, v -> 
            if (v != "Z") answer += v.toInt()
            else answer -= arr[i-1].toInt()
        }
        return answer
    }
}