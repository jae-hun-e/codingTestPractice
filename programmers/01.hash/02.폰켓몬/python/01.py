def solution(nums):
    set_list = set(nums)
    if len(set_list) > len(nums)/2:
        return int(len(nums)/2)
    else :
        return len(set_list)


print(solution([3,1,2,3]))
print(solution([3,3,3,2,2,4]))
print(solution([3,3,3,2,2,2]))