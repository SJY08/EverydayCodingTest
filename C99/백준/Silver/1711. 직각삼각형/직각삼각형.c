#include <stdio.h>

typedef struct {
    long long x, y;
} Point;

long long dot(Point a, Point b, Point c) {
    long long dx1 = b.x - a.x;
    long long dy1 = b.y - a.y;
    long long dx2 = c.x - a.x;
    long long dy2 = c.y - a.y;
    return dx1 * dx2 + dy1 * dy2;
}

int isTriangle(Point a, Point b, Point c) {
    return dot(a, b, c) == 0 || dot(b, a, c) == 0 || dot(c, a, b) == 0;
}

int main() {
    int n, count = 0;
    scanf("%d", &n);
    Point points[1500];

    for (int i = 0; i < n; i++) {
        scanf("%lld %lld", &points[i].x, &points[i].y);
    }

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            for (int k = j + 1; k < n; k++) {
                if (isTriangle(points[i], points[j], points[k])) {
                    count++;
                }
            }
        }
    }

    printf("%d\n", count);
    return 0;
}
