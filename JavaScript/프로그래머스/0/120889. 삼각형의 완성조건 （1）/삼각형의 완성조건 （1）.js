let solution = sides => sides.sort((a,b)=>a-b)[2]-sides.sort((a,b)=>a-b)[1]-sides.sort((a,b)=>a-b)[0]<0?1:2