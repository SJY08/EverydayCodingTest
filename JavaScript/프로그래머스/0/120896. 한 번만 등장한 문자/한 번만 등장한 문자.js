let solution = s => [...s].sort().filter(v => [...s].filter(a=>a==v).length==1).join("")