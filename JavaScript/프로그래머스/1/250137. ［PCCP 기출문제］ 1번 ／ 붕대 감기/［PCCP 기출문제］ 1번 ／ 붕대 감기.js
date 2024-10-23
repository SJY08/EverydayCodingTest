/*
return 체력 <= 0 ? -1 : 체력

붕대감기 : t초동안 감으면서 초당 x만큼 체력 회복 
- t초 연속 붕대감기 성공 => y만큼 추가로 회복
- 최대 체력보다 커지는건 X

기술 쓰는 도중 공격 -> 취소
공격 당하는 순간엔 회복 X.
최소당하거나 끝나면 바로 다시 사용. 연속성공시간 0 초기화

공격을 받으면 피해량만큼 체력 감소 0 이하가 되면 -1 리턴

bandage = [시전시간(t), 초당 회복량(x), 추가회복량(y)]
attacks[i] = [공격시간, 피해량]
*/

function solution(bandage, health, attacks) {
    let hp = health
    let [t,x,y] = bandage
    let skill=0, atk_count = 0,now =0
    
    for(;;){
        now++
        if(hp<=0) return -1
        if(atk_count==attacks.length) break
        
        if(now==attacks[atk_count][0]){
            hp -= attacks[atk_count][1]
            atk_count++
            skill=0
        }
        
        else{
            skill++
            hp=Math.min(health,hp+x)
            if(skill==t){
                skill=0
                hp=Math.min(health,hp+y)
            }
        }
    }
    
    return hp
}