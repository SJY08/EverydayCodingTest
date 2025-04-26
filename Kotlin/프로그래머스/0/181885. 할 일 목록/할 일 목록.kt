class Solution {
    fun solution(todo_list: Array<String>, finished: BooleanArray): Array<String> {
        var result = arrayOf<String>()
        todo_list.zip(finished.toTypedArray()) { todo, finished ->
            if (!finished) result += todo
        }
        return result
    }
}