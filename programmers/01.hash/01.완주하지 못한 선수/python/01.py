def solution(participant, completion):

    participant.sort()
    completion.sort()

    for i, person in enumerate(completion):
        if person != participant[i]:
            return participant[i]

    return participant[-1]
    
    
    
    



solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])
solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])