class Solution {
    fun solution(sizes: Array<IntArray>): Int {
        val sortedArray = sizes.map { it.sorted() }
        val height = sortedArray.map{it[1]}.maxOrNull()?:1
        val width = sortedArray.map{it[0]}.maxOrNull()?:1
        return height * width
    }
}