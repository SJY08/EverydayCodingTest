let solution=order=>order.map(v=>v.includes("latte")?5000:4500).reduce((a,b)=>a+b,0)