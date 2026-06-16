const solution = (numbers) => {
    const arr = numbers.split("")
    let nums = []

    const permutation = (output, rests, length) => {
    if (output.length === length) {
        if (!nums.includes(output * 1)) nums.push(output * 1)
        return
    }
    rests.forEach((v, i) => {
        const nextOutput = `${output}${v}`
        const nextRests = rests.filter((_, restIdx) => restIdx !== i)
        permutation(nextOutput, nextRests, length)
    })
  }

  for (let i = 0; i < arr.length; i++) {
    const firstSelect = arr[i]
    const firstRests = arr.filter((_, restIdx) => restIdx !== i)

    for (let j = 1; j <= arr.length; j++) {
      permutation(firstSelect, firstRests, j)
        console.log
    }
  }

  return nums.filter((v) => isPrime(v * 1)).length
}

const isPrime = (number) => {
    if (number < 2) return false

    for (let i = 2; i <= Math.sqrt(number); i++) {
      const remainder = number % i
      if (remainder === 0) return false
    }
    return true
  }