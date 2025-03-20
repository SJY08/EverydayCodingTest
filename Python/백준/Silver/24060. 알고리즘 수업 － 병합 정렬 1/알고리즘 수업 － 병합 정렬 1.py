N, K = map(int, input().split())
arr = list(map(int, input().split()))

count = 0
saved_values = []


def merge_sort(A, p, r):
    global count
    if p < r:
        q = (p + r) // 2
        merge_sort(A, p, q)
        merge_sort(A, q + 1, r)
        merge(A, p, q, r)


def merge(A, p, q, r):
    global count, saved_values
    i, j = p, q + 1
    tmp = []

    while i <= q and j <= r:
        if A[i] <= A[j]:
            tmp.append(A[i])
            i += 1
        else:
            tmp.append(A[j])
            j += 1
        saved_values.append(tmp[-1]) 
        count += 1

    while i <= q:
        tmp.append(A[i])
        saved_values.append(A[i])
        i += 1
        count += 1

    while j <= r:
        tmp.append(A[j])
        saved_values.append(A[j])
        j += 1
        count += 1

    for t, val in enumerate(tmp):
        A[p + t] = val


merge_sort(arr, 0, len(arr) - 1)

if count < K:
    print(-1)
else:
    print(saved_values[K - 1]) 
