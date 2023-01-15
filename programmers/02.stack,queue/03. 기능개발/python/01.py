def solution(progresses, speeds):
    deploy = []
    for i, score in enumerate(progresses):
        deploy.append((100 - score) // speeds[i])

    reference_value = deploy[0]
    reference_idx = 0
    ans = []

    for i, day in enumerate(deploy):
        if reference_value < day:
            ans.append(i - reference_idx)
            reference_value = day
            reference_idx = i

    ans.append(len(deploy) - reference_idx)
    return ans


# Tset
print(solution([93, 30, 55], [1, 30, 5]))
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
