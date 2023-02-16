def solution(s):
    cnt = 0
    for item in s:
        if item == "(":
            cnt+=1
        else:
            cnt-=1
            if cnt < 0: 
                return False

    return True if cnt == 0 else False

# test
print(solution("()()"))
print(solution("(())()"))
print(solution(")()("))
print(solution("(()("))