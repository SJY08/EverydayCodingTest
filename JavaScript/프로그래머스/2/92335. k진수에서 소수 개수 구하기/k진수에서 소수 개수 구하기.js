const solution = (n, k) => n.toString(k).split("0").filter(Boolean).map(Number).filter(v => isPrime(v)).length

function isPrime(num) {
    if (num == 1) return false
    for(let i = 2 ; i <= Math.sqrt(num) ; i ++){
        if (num % i == 0) return false
    }
    return true
}