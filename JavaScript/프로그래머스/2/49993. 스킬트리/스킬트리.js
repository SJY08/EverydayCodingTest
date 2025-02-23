function solution(skill, skill_trees) {
    let answer = 0
    skill_trees = skill_trees.map(v=> [...v].filter(a => skill.includes(a)).join("")) 
    for(let v of skill_trees) {
        if (skill.slice(0, v.length) == v) answer++
        else continue
    }
    return answer
}