def solution(bandage, health, attacks):
    hp = health
    t,x,y = bandage
    skill=0
    atk_count = 0
    now = 0
    
    while True:
        now+=1
        if atk_count==len(attacks) : break
        
        if now==attacks[atk_count][0] :
            hp -= attacks[atk_count][1]
            if hp <= 0 :
                return -1
            atk_count+=1
            skill=0
        
        else :
            skill+=1
            hp=min(health,hp+x)
            if skill==t :
                skill=0
                hp=min(health,hp+y)

    return hp
