class Solution {
    fun solution(arr: IntArray): Int {
        var answer = arr[0]
        arr.forEach {answer = lcm(answer, it)}
        return answer
    }
    
    fun gcd(a:Int, b:Int): Int  = if(b != 0) gcd(b, a % b) else a
    fun lcm(a:Int, b:Int): Int = a*b / gcd(a,b)
}