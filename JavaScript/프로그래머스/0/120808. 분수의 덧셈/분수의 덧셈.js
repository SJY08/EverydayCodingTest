function solution(numer1, denom1, numer2, denom2) {
    let den = lcm(denom1, denom2)
    numer1 = numer1 * (den / denom1)
    numer2 = numer2 * (den / denom2)
    let numer3 = numer1 + numer2
    return [numer3 / gcd(numer3, den), den / gcd(numer3, den)]
}

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b)
const lcm = (a, b) => a * b / gcd(a, b)