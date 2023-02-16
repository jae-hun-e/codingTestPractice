def solution(phone_book):
    phone_book.sort()

    for i, prev in enumerate(phone_book[:-1]):
        if prev == phone_book[i+1][:len(prev)]:
            return False
    
    return True



# test
print(solution([ "97674223", "1195524421","119"]))
print(solution(["123","456","789"]))
print(solution(["12","123","1235","567","88"]))
