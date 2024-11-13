function solution(spell, dic) {
    for(let v of dic){
        if(v.length == [...new Set(v)].length && spell.every(n=>v.includes(n))){
            for(let i = 0 ; i < spell.length ; i++){
            v=v.replaceAll(spell[i],"")
            if(i!=spell.length-1 && v.length==0) return 2
         }
        if (!v.length) return 1
        }
    }
    return 2
}