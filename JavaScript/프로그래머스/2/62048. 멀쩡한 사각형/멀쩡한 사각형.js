function gcd(w, h) {
    if (w%h == 0) return h
    return gcd(h, w%h)
}

function solution(w, h) {
    let gcdWH = gcd(w, h)
    return w*h - (w+h-gcdWH)
}