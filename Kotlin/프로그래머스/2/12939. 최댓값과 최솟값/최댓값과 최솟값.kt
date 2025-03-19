class Solution {
    fun solution(s: String): String {
        return "${s.split(" ").map{it.toInt()}.minOf{it}} ${s.split(" ").map{it.toInt()}.maxOf{it}}"
    }
}