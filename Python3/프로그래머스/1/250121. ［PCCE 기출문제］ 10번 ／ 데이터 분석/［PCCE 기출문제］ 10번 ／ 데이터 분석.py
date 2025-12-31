'''
ext 값으로 판단할 인덱스 정하기 -> val_ext로 filter
남은 값을 sort_by기준으로 정렬 반환.
'''

def solution(data, ext, val_ext, sort_by):
    idx = {
        "code": 0,
        "date": 1,
        "maximum": 2,
        "remain": 3
    }

    ext_idx = idx[ext]
    sort_idx = idx[sort_by]

    answer = list(filter(lambda v: v[ext_idx] < val_ext, data))

    answer.sort(key=lambda v: v[sort_idx])

    return answer