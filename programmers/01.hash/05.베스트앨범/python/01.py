# 왜틀리는거지??
def solution(genres, plays):
    answer = []

    mapping = {}
    for i, (genre, play) in enumerate(zip(genres, plays)):
        arr = mapping[genre] if genre in mapping else [0]
        arr[0] += play
        arr += [[play, i]]
        mapping[genre] = arr

    for (genre, list) in sorted(mapping.items(), key= lambda x : x[0], reverse=True):
        for (play, idx) in sorted(list[1:], key= lambda x : x[0], reverse=True)[:2]:
            answer.append(idx)
    
    return answer



#test
print(solution(["classic", "pop", "classic", "classic", "pop", "test"],[500, 600, 150, 800, 2500, 8000]))