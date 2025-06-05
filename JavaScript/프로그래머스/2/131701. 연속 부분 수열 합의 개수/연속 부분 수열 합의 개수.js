function solution(elements) {
  const arr = []
  const n = elements.length
  
  for(let i = 0 ; i < elements.length; i ++){
    let sum = 0
    for(let j = i ; j < i+elements.length ; j++){
      sum += elements[j%n]
      arr.push(sum)
    }

  }
  return [...new Set(arr)].length
}