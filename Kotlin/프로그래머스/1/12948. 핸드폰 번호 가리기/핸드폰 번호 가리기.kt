class Solution {
    fun solution(phone_number: String):String {
        return phone_number.split("").mapIndexed{i,v -> if (i < phone_number.length-3 && i != 0 )  "*" else v}.joinToString("")
    }
}