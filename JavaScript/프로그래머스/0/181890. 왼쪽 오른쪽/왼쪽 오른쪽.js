function solution(str_list) {
    let index = str_list.findIndex(item => item == 'l' || item == 'r')
    if (index == -1) return []
    if (str_list[index] == 'l') return str_list.slice(0, index)
    return str_list.slice(index+1)
}