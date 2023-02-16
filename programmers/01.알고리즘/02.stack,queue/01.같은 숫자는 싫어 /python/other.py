def solution(arr):
    a = []
    for i in arr:
        if a[-1:] == [i]: 
            continue
        a.append(i)
    return a

# test
print(solution([1,1,3,3,0,1,1]))
print(solution([4,4,4,3,3]))