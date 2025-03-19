class Solution {
    fun solution(survey: Array<String>, choices: IntArray): String {
        var R = 0
            var C = 0
            var J = 0
            var A = 0

            survey.forEachIndexed { index, item ->
                val target: String = item[0].toString()
                choices[index] = -(choices[index] - 4)

                when(target) {
                    "R", "T" -> if(target == "R") R += choices[index] else R-= choices[index]
                    "C", "F" -> if(target == "C") C += choices[index] else C-= choices[index]
                    "J", "M" -> if(target == "J") J += choices[index] else J-= choices[index]
                    "A", "N" -> if(target == "A") A += choices[index] else A -= choices[index]
                }
            }

            var answer : String = ""
            answer += if (R>=0) "R" else "T"
            answer += if (C>=0) "C" else "F"
            answer += if (J>=0) "J" else "M"
            answer += if (A>=0) "A" else "N"

            return answer
    }
}