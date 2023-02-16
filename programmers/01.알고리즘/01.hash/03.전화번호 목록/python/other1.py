def solution(phone_book):
    answer = True
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    
    print(hash_map)
    for phone_number in phone_book:
        temp = ""
        for number in phone_number:
            temp += number
            print(temp)
            if temp in hash_map and temp != phone_number:
                answer = False
    return answer



# test
print(solution([ "97674223", "1195524421","119"]))
# print(solution(["123","456","789"]))
# print(solution(["12","123","1235","567","88"]))
