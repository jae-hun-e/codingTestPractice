function solution(participant, completion) {
    const participantPerson = participant.sort();
    const completionPerson = completion.sort();

    return participantPerson.find((person, idx) => person !== completionPerson[idx]);
}

// test
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
    solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
    )
);
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
