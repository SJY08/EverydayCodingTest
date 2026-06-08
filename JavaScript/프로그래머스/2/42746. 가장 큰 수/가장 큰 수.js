function solution(numbers) {
    const arr = numbers.map(String)

    function quickSort(a) {
        if (a.length <= 1) return a

        const pivot = a[0]
        const left = []
        const right = []

        for (let i = 1; i < a.length; i++) {
            if (a[i] + pivot > pivot + a[i]) left.push(a[i])
            else right.push(a[i])
        }

        return [...quickSort(left), pivot, ...quickSort(right)]
    }

    const result = quickSort(arr).join('')

    return result[0] === '0' ? '0' : result
}