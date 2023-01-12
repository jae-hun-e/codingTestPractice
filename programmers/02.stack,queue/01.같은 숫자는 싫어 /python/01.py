def solution(arr):
    answer = []
    arr.append(10)
    for (i, e) in enumerate(arr[:-1]):
        if e != arr[i+1]:
            answer.append(e)
    return answer

# test
print(solution([1,1,3,3,0,1,1]))
print(solution([4,4,4,3,3]))