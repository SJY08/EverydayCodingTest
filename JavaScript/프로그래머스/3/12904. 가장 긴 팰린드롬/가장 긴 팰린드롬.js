function solution(s) {
  const n = s.length
  let answer = 1

  const expand = (l, r) => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      answer = Math.max(answer, r - l + 1)
      l--
      r++
    }
  }

  for (let i = 0; i < n; i++) {
    expand(i, i)
    expand(i, i + 1)
  }

  return answer
}