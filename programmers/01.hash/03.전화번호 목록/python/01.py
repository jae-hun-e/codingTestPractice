#  효율성 실패 
def solution(phone_book):
    phone_book.sort(key=len)
    for i, num1 in enumerate(phone_book):
        for num2 in (phone_book[i+1:]):
            if num1 == num2[:len(num1)]:  
                return False
        
    return True



# test
print(solution([ "97674223", "1195524421","119"]))
print(solution(["123","456","789"]))
print(solution(["12","123","1235","567","88"]))