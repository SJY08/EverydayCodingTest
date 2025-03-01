def gcd(n, m):
    if m == 0:
        return n
    else:
        return gcd(m, n % m)

def lcm(n, m):  
    return n // gcd(n, m) * m

n1, n2 = map(int, input().split())

print(gcd(n1, n2))
print(lcm(n1, n2))