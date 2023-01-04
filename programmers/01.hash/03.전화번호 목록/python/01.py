#  효율성 실패 
def solution(phone_book):
    phone_book.sort(key=len)

    for i in range(len(phone_book)):
        for num in phone_book[i+1:]:
            if num[:len(phone_book[i])] == phone_book[i]:
                print(num[:len(phone_book[i])])
                print(phone_book[i])
                return False
    return True



# test
# print(solution([ "97674223", "1195524421","119"]))
# print(solution(["123","456","789"]))
# print(solution(["12","123","1235","567","88"]))