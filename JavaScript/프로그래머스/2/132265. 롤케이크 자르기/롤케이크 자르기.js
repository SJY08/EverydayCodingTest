function solution(topping) {
  let oldBro = new Set(topping).size
  const youngBro = new Set()
  let restToppings = topping.slice()
  let result = 0
    
  const lastToppings = new Map()
  new Set(topping).forEach((x) => lastToppings.set(x, topping.indexOf(x)))

  for (let i = topping.length - 1; i >= 0; i--) {
    let cutTopping = restToppings.pop()
    youngBro.add(cutTopping)

    if (i === lastToppings.get(topping[i])) oldBro--

    if (oldBro === youngBro.size) result++
  }

  return result
}