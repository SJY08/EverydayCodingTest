function solution(survey, choices) {
    let R=0, C=0,J=0,A=0
    
    survey.forEach((v,i)=>{
        const target = v[0]
        
        choices[i] = -(choices[i]-4)
        
        if(target=="R"||target=="T"){
            if(target=="R"){
                 R=R+choices[i]
            }
            else{
                R=R-choices[i]
            }
            return ;
        }
        
        if(target=="C" || target == "F"){
            if(target=="C"){
                C=C+choices[i]
            }
            else{
                C=C-choices[i]
            }
            
            return ;
        }
        
        if(target=="J" || target == "M"){
            if(target=="J"){
                J=J+choices[i]
            }
            else{
                J=J-choices[i]
            }
            
            return ;
        }
        
        if(target=="A" || target == "N"){
            if(target=="A"){
                A=A+choices[i]
            }
            else{
                A=A-choices[i]
            }
            
            return ;
        }
    })
    
    return `${R>=0?"R":"T"}${C>=0?"C":"F"}${J>=0?"J":"M"}${A>=0?"A":"N"}`
}