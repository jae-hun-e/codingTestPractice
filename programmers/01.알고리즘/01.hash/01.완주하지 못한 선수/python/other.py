def solution(participant, completion):
    participant.sort()
    completion.sort()
    for p, c in zip(participant, completion):
        if p != c:
            return p
    return participant[-1]
    
    
    
    



solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])
solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])